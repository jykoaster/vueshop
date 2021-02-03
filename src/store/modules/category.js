import { deletecategory, getallcategorys, editcategory, getlevelcate, addcategory } from '@/api/request'

const state = () => ({
  categorys: [],
})
const mutations = {
  SET_CATEGORY(state, data) {
    state.categorys = data
  },
}
const actions = {
  async getallcategorys({ commit }) {
    let data = await getallcategorys()
    commit('SET_CATEGORY', data)
  },
  async deletecategory({ commit }, param) {
    await deletecategory(param.level, param.id)
    let data = await getallcategorys()
    commit('SET_CATEGORY', data)
  },
  async getlevelcate(a, level) {
    let data = await getlevelcate(level)
    return data
  },
  async editcategory({ commit }, param) {
    let paramlevel = 'category' + param.level
    let paramname = 'category' + param.level + '_name'
    let paramid = null
    if (param.level > 1) {
      let a = param.level - 1
      paramid = 'category' + a + '_id'
    }
    await editcategory(paramlevel, param.id, param.name, param.upperid, paramid, paramname)
    let data = await getallcategorys()
    commit('SET_CATEGORY', data)
  },
  async addcategory({ commit }, param) {
    let paramlevel = 'category' + param.level
    let paramname = 'category' + param.level + '_name'
    let paramid = null
    if (param.level > 1) {
      let a = param.level - 1
      paramid = 'category' + a + '_id'
    }
    await addcategory(paramlevel, param.name, param.upperid, paramid, paramname)
    let data = await getallcategorys()
    commit('SET_CATEGORY', data)
  },
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
