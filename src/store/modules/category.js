// import category from '@/api/category'
// import { getallcategorys } from '@/api/request'

const state = () => ({
  categorys: [],
})
const mutations = {
  SET_CATEGORY(state, data) {
    state.categorys = data
  },
}
const actions = {
  // getallcategorys({ commit }, data) {
  //   commit('SET_CATEGORY', data)
  // },
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
