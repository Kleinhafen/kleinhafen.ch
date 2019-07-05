<template lang="pug" src="../templates/home.pug"></template>
<style lang="stylus" src="../stylesheets/home.styl"></style>

<script>
import Hero from './hero.vue'
import IgFeed from './ig_feed.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    IgFeed,
  }
}
</script>
