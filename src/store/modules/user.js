import {
  login,
  captcha,
  member,
  register,
  changedata,
  getallusers,
  getallgroup,
  adduser,
  deleteuser,
} from '@/api/request'
const state = () => ({
  account: '',
  name: '',
  birth: '',
  level: '',
  email: '',
  address: '',
  phone: '',
  token: '',
  alluser: [],
  allgroup: [],
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
  async getallusers({ commit }) {
    let data = await getallusers()
    commit('SET_alluser', data.data)
  },

  async getallgroup({ commit }) {
    let data = await getallgroup()
    commit('SET_allgroup', data)
  },

  async adduser({ commit }, param) {
    let account = param.account
    let name = param.name
    let email = param.email
    let group = param.group
    let level = param.level
    let phone = param.phone
    await adduser(account, name, email, group, level, phone)
    let data = await getallusers()
    commit('SET_alluser', data.data)
  },

  async deleteuser({ commit }, uuid) {
    await deleteuser(uuid)
    let data = await getallusers()
    commit('SET_alluser', data.data)
  },
}

const mutations = {
  SET_alluser(state, data) {
    state.alluser = data
  },
  SET_allgroup(state, data) {
    state.allgroup = data
  },
  SET_login(state, token) {
    state.token = token
  },
  SET_data(state, data) {
    state.account = data.account
    state.name = data.name
    state.level = data.level.name
    state.email = data.email
    state.phone = data.phone
    state.address = data.address
  },
  LOGOUT(state) {
    state.account = ''
    state.name = ''
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
