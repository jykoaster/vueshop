import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false
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
  render: h => h(App)
}).$mount('#app')