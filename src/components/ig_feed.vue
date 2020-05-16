<template lang="pug" src="../templates/ig_feed.pug"></template>
<style lang="stylus" src="../stylesheets/ig_feed.styl"></style>

<script>
import axios from 'axios'
import config from '../../config/config.js'

export default {
  name: 'IgFeed',
  data: () => {
    return {
      images: [],
    }
  },
  mounted() {
    axios.get(
      config.apiUrl + 'instagram-feed'
    ).then((res) => {
      if (!res.data.err) {
        this.images = res.data.images.slice(0, 16)
      }
    })
  }
}
</script>
