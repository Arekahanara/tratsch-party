module.exports = {
  devServer: {
    https: false,
    disableHostCheck: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    proxy: {
      '/api': {
        target: 'http://api:3030',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
