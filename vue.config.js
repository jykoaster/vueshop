module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://127.0.0.1:8090',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
}
