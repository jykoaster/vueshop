// import router from '@/router'
// import category from '@/api/category'
import { getproducts, getitemdetail, additem, edititem, searchitem, getitemsbyurl } from '@/api/request'
const state = () => ({
  search: [],
  detail: {},
  cateid: '',
  page: 1,
})

const actions = {
  async getitems({ commit }, { id, page, status }) {
    let data = await getproducts(id, page, status)
    if (data.data.length == 0) {
      data = []
    }
    await commit('setsrchitems', data)
    await commit('setCateid', id)
    await commit('setpage', page)
  },
  async changepage({ commit }, url) {
    let data = await getitemsbyurl(url)
    await commit('setsrchitems', data)
  },
  async searchitem({ commit }, srch) {
    let data = await searchitem(srch)
    if (data.data.length == 0) {
      data = []
    }
    await commit('setsrchitems', data)
  },
  async getitemdetail({ commit }, id) {
    const detail = await getitemdetail(id)
    commit('setdetail', detail)
  },
  async additem({ commit }, { cateid, name, description, suggest, price, residual, status, image }) {
    await additem(cateid, name, description, suggest, price, residual, status, image)
    let data = await getproducts(cateid, 1, 0)
    if (data.data.length == 0) {
      data = []
    }
    await commit('setsrchitems', data)
    await commit('setCateid', cateid)
    await commit('setpage', 1)
  },
  async edititem({ commit }, { cateid, name, description, suggest, price, residual, status, uuid, page }) {
    await edititem(cateid, name, description, suggest, price, residual, status, uuid)
    let data = await getproducts(cateid, page, 0)
    if (data.data.length == 0) {
      data = []
    }
    await commit('setsrchitems', data)
    await commit('setCateid', cateid)
    await commit('setpage', 1)
  },
  clear({ commit }) {
    commit('clearall')
  },
}

const mutations = {
  setCateid(state, id) {
    state.cateid = id
  },
  setsrchitems(state, items) {
    state.search = items
  },
  setpage(state, page) {
    state.page = page
  },
  setdetail(state, data) {
    state.detail = data
  },
  clearall(state) {
    state.page = 1
    state.cateid = ''
    state.detail = {}
    state.search = []
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
