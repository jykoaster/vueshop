import { getcartitems, addcartitem, deletecartitem } from '@/api/request'
const state = () => ({
  cartitems: [],
})

const actions = {
  async getcartitems({ commit }) {
    let data = await getcartitems()
    commit('setitem', data)
  },
  async additems(a, data) {
    await addcartitem(data)
  },
  async ditem({ commit }, id) {
    await deletecartitem(id)
    let data = await getcartitems()
    commit('setitem', data)
  },
}

const mutations = {
  setitem(state, data) {
    state.cartitems = data
  },

  LOGOUT(state) {
    state.cartitems = []
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
