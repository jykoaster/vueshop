import router from '@/router'
import category from '@/api/category'
import items from '@/api/items'
//shape [{good_id:good_id,name:name,src:src},...]
const state = () => ({
  all: [],
  search: [],
  detail: {},
  // route: '',
})

const actions = {
  getitems({ commit }, param) {
    let obj = null
    // let route = ''
    if (param.cate3) {
      obj = category.getitems(param.cate1.id, param.cate2.id, param.cate3.id)
      // route = param.cate1.name + '/' + param.cate2.name + '/' + param.cate3.name
    } else {
      obj = category.getitems(param.cate1.id, param.cate2.id)
      // route = param.cate1.name + '/' + param.cate2.name
    }
    commit('setsrchitems', obj)
    // commit('setroute', route)
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
