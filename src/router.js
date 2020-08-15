import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueI18n from 'vue-i18n'
// import App from './components/app.vue'
import Home from './components/home.vue'
// import About from './components/about.vue'
// import Contact from './components/contact.vue'
// import i18nMessages from './i18n-messages'

Vue.use(VueRouter)
// Vue.use(VueI18n)

const i18n = null

// const SUPPORTED_LOCALES = Object.keys(i18nMessages)

// const i18n = new VueI18n({
//   locale: 'en',
//   messages: i18nMessages,
// })

// const router = new VueRouter({
//   // mode: 'history',
//   // base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home2',
//       component: Home,
//     },
//     {
//       path: '/:locale',
//       component: App,
//       // beforeEnter: (to, from, next) => {
//       //   const locale = to.params.locale
//       //   if (!SUPPORTED_LOCALES.includes(locale)) {
//       //     return next('en')
//       //   }
//       //   if (i18n.locale != locale) {
//       //     i18n.locale = locale
//       //   }
//       //   return next()
//       // },
//       children: [
//         {
//           path: '/',
//           name: 'home',
//           component: Home,
//         },
//         {
//           path: 'about',
//           name: 'about',
//           component: About,
//         },
//         {
//           path: 'contact',
//           name: 'contact',
//           component: Contact,
//         },
//       ],
//     },
//   ]
// })

// const router = new VueRouter({
//   // mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '',
//       name: 'home',
//       component: Home,
//     },
//     {
//       path: 'about',
//       name: 'about',
//       component: About,
//     },
//     {
//       path: 'contact',
//       name: 'contact',
//       component: Contact,
//     },
//   ]
// })

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }
  ],
})

export {router, i18n}
