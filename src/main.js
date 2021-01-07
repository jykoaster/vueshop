import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import global_ from './components/Global';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.GLOBAL=global_
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')