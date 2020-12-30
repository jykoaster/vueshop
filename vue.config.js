module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://10.1.0.12',
        ws: true,
        changeOrigin: true
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueshop/'
    : '/'
}