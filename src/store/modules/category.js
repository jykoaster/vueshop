import category from '@/api/category'

const state = () => ({
  categorys: [],
})
const mutations = {
  SET_CATEGORY(state, data) {
    state.categorys = data
  },
}
const actions = {
  getallcategorys({ commit }) {
    commit('SET_CATEGORY', category.getcategory())
  },
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
