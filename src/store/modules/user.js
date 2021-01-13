// import User from '@/api/user'
const state = () => ({
  // userdata: {},
  account: '',
  username: '',
  level: '',
  email: '',
  address: '',
  phone: '',
  token: '',
})

const actions = {
  getdata({ commit }, data) {
    commit('SET_data', data)
  },
  settoken({ commit }, token) {
    commit('SET_token', token)
  },
  logout({ commit }) {
    commit('LOGOUT')
  },
}

const mutations = {
  SET_login(state, token) {
    console.log(token)
    state.token = token
  },
  SET_data(state, data) {
    state.account = data.account
    state.username = data.username
    state.level = data.level
    state.email = data.email
    state.phone = data.phone
    state.address = data.address
  },
  LOGOUT(state) {
    state.account = ''
    state.username = ''
    state.level = ''
    state.email = ''
    state.phone = ''
    state.address = ''
    state.token = ''
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
