const path = require('path')
// vue.config.js
module.exports = {
  devServer: {
    proxy: 'http://localhost:3000/api/v1'
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': path.resolve(__dirname, 'src/assets')
      }
    }
  }
}
