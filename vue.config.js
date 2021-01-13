module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://192.168.96.166:8090',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vueshop/' : '/',
}
