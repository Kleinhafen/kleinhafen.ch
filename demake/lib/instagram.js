const fs = require('fs')
const path = require('path')
const request = require('request')
const email = require('./email')
const config = require('../config/config')

let images_cache = {
  mtime: 0,
  data: [],
}

function writeConfigFile(newConfig) {
  const configFilePath = path.join(__dirname, 'config/config.json')
  fs.writeFileSync(configFilePath, JSON.stringify(newConfig, null, 2))
}

function getUnixTime() {
  return Math.floor(new Date() / 1000)
}

function shouldRefreshAccessToken() {
  const currentTime = getUnixTime()
  return currentTime > config.instagram.access_token_update_at
}

function refreshAccessTokenIfNeeded(done) {
  if (!shouldRefreshAccessToken()) {
    return done(null)
  }
  const params = 'refresh_access_token?grant_type=ig_refresh_token'
  const url = makeInstagramApiUrl(params)
  console.log('[instagram#refreshAccessTokenIfNeeded] GET ' + url)
  request({url, json: true}, (err, res, body) => {
    if (body.error || err) {
      const error = {
        message: '[instagram#refreshAccessTokenIfNeeded] Could not refresh access token',
        body,
        err
      }
      console.error(error)
      email.sendDebugEmail(error)
      return done(body.error || err)
    }
    console.log('[instagram#refreshAccessTokenIfNeeded]', body)
    config.instagram.access_token = body.access_token
    config.instagram.access_token_update_at = getUnixTime() + Math.round(+body.expires_in / 2)
    writeConfigFile(config)
    done(null)
  })
}

function makeInstagramApiRequest(params, done) {
  const url = makeInstagramApiUrl(params)
  console.log('[instagram#makeInstagramApiRequest] GET ' + url)
  refreshAccessTokenIfNeeded((err) => {
    if (err) {
      // Can't do anything here, try to get the images, error has been reported.
    }
    request({url, json: true}, done)
  })
}

function shouldInvalidateImagesCache() {
  const currentTime = getUnixTime()
  const invalidationTimespan = 60 * 60 * 6 // 6 hours in seconds
  return currentTime > images_cache.mtime + invalidationTimespan
}

function makeInstagramApiUrl(params) {
  const INSTAGRAM_API_URL = 'https://graph.instagram.com/'
  return INSTAGRAM_API_URL + params +
    '&access_token=' + config.instagram.access_token
}

function refreshImagesCache(done) {
  makeInstagramApiRequest('/me/media?fields=media_url,permalink', (err, res, body) => {
    if (body.error || err) {
      return done(body.error || err)
    }
    const images = body.data
    images_cache.data = images
    images_cache.mtime = getUnixTime()
    done(null)
  })
}

function getInstagramFeed(done) {
  if (shouldInvalidateImagesCache()) {
    console.log('[instagram#getInstagramFeed] Refreshing cache')
    refreshImagesCache((err) => {
      if (err) {
        email.sendDebugEmail({
          message: '[instagram#getInstagramFeed] Could not get feed',
          err
        })
        return done(err)
      }
      done(null, images_cache.data)
    })
  } else {
    console.log('[instagram#getInstagramFeed] Getting from cache')
    done(null, images_cache.data)
  }
}

module.exports = {
  getInstagramFeed,
}
