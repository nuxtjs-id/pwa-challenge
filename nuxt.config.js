module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'NuxtJs - PWA Challenge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { hid: 'keywords', name: 'keywords', content: 'nuxtjs,pwa,pwa challenge,indonesia,vue,vuejs' },
      { hid: 'description', name: 'description', content: 'NuxtJs - Indonesia. PWA Challenge. VueJs' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.webmanifest' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],
  axios: {
    // proxyHeaders: false
  },
  manifest: {
    name: 'NuxtJs - PWA',
    lang: 'id'
  },
  workbox: {
    importScripts: [
      'custom-sw.js'
    ],
    runtimeCaching: [
      {
        urlPattern: 'https://nuxtjs-pwa.herokuapp.com/.*',
        handler: 'cacheFirst',
        method: 'GET'
      }
    ]
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
