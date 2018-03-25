const BabiliPlugin = require('babili-webpack-plugin')

module.exports = {
  srcDir: 'client/',
  router: {
    middleware: ['auth', 'resolveChannel']
  },
  plugins: [
    { src: '~/plugins/nuxt-client-init.js', ssr: false },
    { src: '~/plugins/moment.js' },
    { src: '~/plugins/vuex-router-sync.js' }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tratsch.Party',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['@/assets/scss/main.scss'],
  /*
  ** Add axios globally
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (!ctx.isDev) {
        config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
        config.plugins.push(new BabiliPlugin())
      }

      if (ctx.isClient) {
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
