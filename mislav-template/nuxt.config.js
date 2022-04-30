require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  generate: { fallback: true },

  vue: {
    config: {
      productionTip: true
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - mislav-template',
    title: 'mislav-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'Novi Vinodolski, Croatia, Hrvatska, Kroatien, Adriatic sea, Renata, Adriatisches Meer, coast, vacation, Urlaub' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/assets/css/global.css',
    { src: './plugins/vue-carousel.js', mode: 'client' },
    { src: './plugins/persistedState.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { iconfont: 'mdi' }],
    '@nuxtjs/fontawesome',
    "@nuxtjs/svg"    
  ],

  fontawesome: {
    icons: {
      solid: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    ['nuxt-gmaps', { key: process.env.MAPS_EMBED_API }],
    '@nuxtjs/i18n',
    '@nuxtjs/axios'
  
  ],

  middleware: ["auth"],

  i18n: {
    locales: [
    { code: 'en', iso: 'en-UK', name: 'English', file: 'en' },
    { code: 'hr', iso: 'hr-HR', name: 'Hrvatski', file: 'hr' },
    { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de' }],
    baseUrl: 'https://mislav-template.com',
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix',
    detectBrowserLanguage: {
      alwaysRedirect: true, fallbackLocale: 'en', redirectOn: 'root', useCookie: true, cookieCrossOrigin: false, cookieDomain: null, cookieKey: 'i18n_redirected', cookieSecure: false
    }
  },
  
  axios: {
    baseURL: 'http://localhost:5000/api'
  },
 
  styleResources: {
    scss: [
        '~/assets/scss/main.scss',
        '~assets/scss/mixins.scss',
    ]
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
  
}
