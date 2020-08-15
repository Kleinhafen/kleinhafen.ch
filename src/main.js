import Vue from 'vue/dist/vue.esm.js'
// import Vue from 'vue'
import {router, i18n} from './router'
import App from './components/app.vue'

Vue.config.productionTip = false

new Vue({
  router,
  // i18n,
  render: h => h(App),
}).$mount('#app')
