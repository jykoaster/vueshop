import router from '@/router';
import shop from '@/api/shop'
//shape [{good_id:good_id,name:name,src:src},...]
const state = () => ({
  all: [],
  search: [],
})

const actions = {
  getallitems({ commit }) {
    shop.getitems(items => {
      commit('setItems', items)
    })
  },
  searchitem({ commit }, keyword) {
    shop.getitems(items => {
      const res = items.map(item => {
        let regex = RegExp(keyword)
        let ismatch = regex.test(item.name)
        if (ismatch) {
          return item
        }
      })
      let searchres = res.filter(e => e)
      if (searchres.length == 0) {
        searchres = ['nores']
      }
      commit('setsrchitems', searchres)
      router.push('/shop').catch(() => {})
    })
  },
  clear({ commit }) {
    commit('clearall')
  }

}

const mutations = {
  setItems(state, items) {
    state.all = items
  },
  setsrchitems(items) {
    state.search = items
  },
  clearall(state) {
    state.search = []
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}