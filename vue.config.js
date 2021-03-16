module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://ec2-18-216-206-131.us-east-2.compute.amazonaws.com:8090',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vueshop/' : '/',
}
