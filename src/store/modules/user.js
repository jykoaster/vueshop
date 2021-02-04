import { login, captcha, member, register, changedata } from '@/api/request'
const state = () => ({
  account: '',
  username: '',
  birth: '',
  level: '',
  email: '',
  address: '',
  phone: '',
  token: '',
})

const actions = {
  login(a, param) {
    login(param)
  },
  captcha() {
    let data = captcha()
    return data
  },
  register(a, param) {
    let data = register(param)
    return data
  },
  async getdata({ commit }) {
    let data = await member()
    commit('SET_data', data)
  },
  async changedata({ commit }, param) {
    changedata(param.name, param.phone, param.email)
    let data = await member()
    commit('SET_data', data)
  },
  logout({ commit }) {
    commit('LOGOUT')
  },
}

const mutations = {
  SET_login(state, token) {
    state.token = token
  },
  SET_data(state, data) {
    state.account = data.account
    state.username = data.name
    state.level = data.level.name
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
