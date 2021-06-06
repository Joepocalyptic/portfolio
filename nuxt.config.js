export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: "localhost",
    port: 8080
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://use.typekit.net/lhw0pfg.css"}
    ],
    script: [
      { src: 'https://kit.fontawesome.com/6a750c33f5.js', crossorigin: 'anonymous' },
      { src: 'https://analytics.joeypereira.dev/js/plausible.js', defer: true, async: true, "data-domain": "joeypereira.dev"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/particles.js',
    '~/plugins/graphcms.js',
    // SimplyAnalytics: { src: '~/plugins/simple-analytics.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  router: {
    middleware: 'router'
  }
}
