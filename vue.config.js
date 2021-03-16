module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      '/api/v1': {
        target: 'http://18.216.206.131:8090/',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vueshop/' : '/',
}
