// import router from '@/router'
// import category from '@/api/category'
import { getproducts, getitemdetail, additem, edititem } from '@/api/request'
const state = () => ({
  search: [],
  detail: {},
  cateid: '',
  page: 1,
})

const actions = {
  async getitems({ commit }, param) {
    let data = await getproducts(param.id, param.page)
    if (data.data.length == 0) {
      data = []
    }
    await commit('setsrchitems', data)
    await commit('setCateid', param.id)
    await commit('setpage', param.page)
  },
  searchitem() {
    // let items = category.getallitems()
    // const res = items.map((item) => {
    //   let regex = RegExp(keyword)
    //   let ismatch = regex.test(item.name)
    //   if (ismatch) {
    //     return item
    //   }
    // })
    // let searchres = res.filter((e) => e)
    // if (searchres.length == 0) {
    //   searchres = []
    // }
    // commit('setsrchitems', searchres)
    // router.push('/shop').catch(() => {})
  },
  async getitemdetail({ commit }, id) {
    const detail = await getitemdetail(id)
    commit('setdetail', detail)
  },
  async additem(a, { cateid, name, description, suggest, price, residual, status, image }) {
    await additem(cateid, name, description, suggest, price, residual, status, image)
  },
  async edititem(a, { cateid, name, description, suggest, price, residual, status, image, uuid }) {
    await edititem(cateid, name, description, suggest, price, residual, status, image, uuid)
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
