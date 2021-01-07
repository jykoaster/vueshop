import Vue from 'vue'
import Vuex from 'vuex'
import items from './modules/items'
import cart from './modules/cart'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    items,
    cart
  },
})