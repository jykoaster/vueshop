import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
// import global_ from './components/Global'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import cookie from './api/cookie'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../public/css/global.scss'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

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
      let groupid = response.data.result.user.group_id
      cookie.settoken(jwttoken)
      let param = {
        token: jwttoken,
        groupid: groupid,
      }
      store.commit('user/SET_login', param)
      router.replace('/')
    }
    if (response.data && response.status == 200 && response.config.url == '/api/v1/logout') {
      cookie.removetoken()
      store.commit('user/LOGOUT')
      store.commit('cart/LOGOUT')
      store.commit('items/clearall')
      router.replace('/')
    }
    if (response.data && response.status == 200 && response.config.url == '/api/v1/register') {
      router.replace('/')
    }
    return response
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit('user/LOGOUT')
          store.commit('cart/LOGOUT')
          store.commit('items/clearall')
          cookie.removetoken()
          store.commit('user/SET_login', '')

          if (error.response.config.url != '/api/v1/login') {
            alert('Please Login!')
            router.replace({
              path: '/login',
            })
          }
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
  created() {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animate__animated',
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'bottom-center', // defines which position of the element regarding to window should trigger the animation
    })
  },
  render: (h) => h(App),
}).$mount('#app')
