#!/usr/bin/env node

const instagram = require('./instagram')

setInterval(() => {
  instagram.getInstagramFeed((err, feed) => {
    console.log('err', err)
    console.log('feed', feed)
  })
}, 4000)
