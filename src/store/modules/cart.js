const state = () => ({
  cartitems: [],
})

const getters = {
  getcartitems: (state, getter, rootState) => {
    console.log(state.cartitems)
    let tmp = []
    state.cartitems.forEach((cartitem) => {
      const allitems = rootState.items.all.find((item) => item.good_id == cartitem.id)
      if (allitems) {
        let pushdata = { id: cartitem.id, count: cartitem.count, name: allitems.name }

        tmp.push(pushdata)
      }
    })
    console.log(tmp)
    return tmp
  },
}

const actions = {
  additems({ state, commit }, chosenitem) {
    const cartid = state.cartitems.find((item) => item.id == chosenitem.id)
    if (!cartid) {
      commit('newitem', chosenitem.id)
    } else {
      commit('addcount', cartid)
    }
  },
  ditem({ commit }, id) {
    commit('deleteitem', id)
  },
}

const mutations = {
  newitem(state, id) {
    let pushdata = { id: id, count: 1 }
    state.cartitems.push(pushdata)
  },
  addcount(state, { id }) {
    const cartitem = state.cartitems.find((item) => item.id == id)
    cartitem.count++
  },
  deleteitem(state, id) {
    const cartitem = state.cartitems.findIndex((item) => item.id == id)
    console.log(cartitem)
    state.cartitems.splice(cartitem, 1)
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}
