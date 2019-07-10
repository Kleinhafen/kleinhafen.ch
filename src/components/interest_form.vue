<template lang="pug" src="../templates/interest_form.pug"></template>
<style lang="stylus" src="../stylesheets/interest_form.styl"></style>

<script>
import axios from 'axios'

const API_URL = 'http://localhost:9000/';

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
      this.formData.nPeople = ''
      this.formData.description = ''
    },
    close() {
      this.clear()
      this.$emit('close')
    },
    submit() {
      axios.post(
        API_URL + 'interest-form-message',
        this.formData
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
