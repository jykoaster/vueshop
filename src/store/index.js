import Vue from 'vue'
import Vuex from 'vuex'
import items from './modules/items'
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
import createPersistedState from 'vuex-persistedstate' //prevent state be clear after refresh

Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [createPersistedState()], //prevent state be clear after refresh
  modules: {
    items,
    cart,
    user,
    category,
  },
})
