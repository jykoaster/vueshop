import User from '@/api/user'
const state = () => ({
  userdata: [],
  //   account: '',
  //   username: '',
  //   level: '',
  //   email: '',
  //   address: '',
  //   phone: '',
})

const actions = {
  getdata({ commit }) {
    const data = User.getuserdata()
    commit('setdata', data)
  },
}

const mutations = {
  setdata(state, data) {
    state.userdata = data
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
