import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
// import global_ from './components/Global'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import cookie from './api/cookie'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
// Vue.prototype.GLOBAL = global_
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.name == 'member') {
    if (!cookie.gettoken()) {
      alert('Not login.Please login')
      next('login')
    }
  }
  next()
})

axios.interceptors.request.use(
  (config) => {
    cookie.gettoken()
    if (cookie.gettoken()) {
      config.headers['Authorization'] = 'Bearer ' + cookie.gettoken()
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (response) => {
    if (response.data && response.status == 200 && response.config.url == '/api/v1/login') {
      let jwttoken = response.data.result.token
      cookie.settoken(jwttoken)
      store.commit('user/SET_login', jwttoken)
    }
    if (response.data && response.status == 200 && response.config.url == '/api/v1/logout') {
      cookie.removetoken()
      store.commit('user/LOGOUT', '')
      router.replace('/')
    }
    return response
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          cookie.removetoken()
          store.commit('user/SET_login', '')
          router.replace({
            path: '/',
          })
      }
    }
    return Promise.reject(error.response.data)
  }
)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app')
