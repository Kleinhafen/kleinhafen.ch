<template lang="pug" src="../templates/interest_form.pug"></template>
<style lang="stylus" src="../stylesheets/interest_form.styl"></style>

<script>
import axios from 'axios'
import config from '../../config/config.js'

export default {
  name: 'InterestForm',
  props: ['formType'],
  data: () => {
    return {
      isSubmitted: false,
      formData: {
        name: '',
        email: '',
        phone: '',
        company: '',
        dates: '',
        tourDates: '',
        nPeople: '',
        description: '',
      },
    }
  },
  methods: {
    clear() {
      this.formData.name = ''
      this.formData.email = ''
      this.formData.phone = ''
      this.formData.company = ''
      this.formData.dates = ''
      this.formData.tourDates = ''
      this.formData.nPeople = ''
      this.formData.description = ''
    },
    close() {
      this.clear()
      this.$emit('close')
    },
    submit() {
      axios.post(
        config.apiUrl + 'interest-form-message',
        { ...this.formData, formType: this.formType }
      ).then((res) => {
        this.isSubmitted = true
      }).catch((err) => {
        console.error(err)
        alert('Oops! There was a problem. Email us at ahoi@kleinhafen.ch and let us know.')
      })
    },
  },
}
</script>
