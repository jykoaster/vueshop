import router from '@/router'
import category from '@/api/category'
//shape [{good_id:good_id,name:name,src:src},...]
const state = () => ({
  all: [],
  search: [],
})

const actions = {
  getitems({ commit }, param) {
    const obj = category.getitems(param.cate1, param.cate2, param.cate3)
    commit('setsrchitems', obj)
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
  clear({ commit }) {
    commit('clearall')
  },
}

const mutations = {
  setItems(state, items) {
    state.all = items
  },
  setsrchitems(state, items) {
    state.search = items
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
