import router from '@/router'
import category from '@/api/category'
import items from '@/api/items'
import { getproducts } from '@/api/request'
const state = () => ({
  all: [],
  search: [],
  detail: {},
  cateid: '',
  // route: '',
})

const actions = {
  async getitems({ commit }, param) {
    let data = await getproducts(param.id, param.page)
    commit('setsrchitems', data)
    commit('setCateid', param.id)
    router.push('/shop').catch(() => {})
  },
  searchitem({ commit }, keyword) {
    let items = category.getallitems()
    const res = items.map((item) => {
      let regex = RegExp(keyword)
      let ismatch = regex.test(item.name)
      if (ismatch) {
        return item
      }
    })
    let searchres = res.filter((e) => e)
    if (searchres.length == 0) {
      searchres = ['nores']
    }
    commit('setsrchitems', searchres)
    router.push('/shop').catch(() => {})
  },
  getitemdetail({ commit }, id) {
    const detail = items.detail(id)
    commit('setdetail', detail)
  },
  clear({ commit }) {
    commit('clearall')
  },
}

const mutations = {
  setCateid(state, id) {
    state.cateid = id
  },
  setItems(state, items) {
    state.all = items
  },
  setsrchitems(state, items) {
    state.search = items
  },
  // setroute(state, route) {
  //   state.route = route
  // },
  setdetail(state, data) {
    state.detail = data
  },
  clearall(state) {
    state.search = []
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
