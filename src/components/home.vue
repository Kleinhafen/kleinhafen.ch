<template lang="pug" src="../templates/home.pug"></template>
<style lang="stylus" src="../stylesheets/home.styl"></style>

<script>
import Hero from './hero.vue'
import IgFeed from './ig_feed.vue'
import InterestForm from './interest_form.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    IgFeed,
    InterestForm,
  },
  data: () => {
    return {
      formType: null,
    }
  },
  methods: {
    setFormType(formType) {
      this.formType = formType
    },
  },
}
</script>
