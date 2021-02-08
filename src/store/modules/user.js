import {
  login,
  captcha,
  member,
  register,
  changedata,
  getallusers,
  useradminformdata,
  adduser,
  edituser,
  deleteuser,
  resetpassword,
} from '@/api/request'
const state = () => ({
  account: '',
  name: '',
  level: '',
  email: '',
  address: '',
  phone: '',
  token: '',
  alluser: [],
  allgroup: [],
  alllevel: [],
  allstatus: [],
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

  async getformdata({ commit }) {
    let data = await useradminformdata()
    commit('SET_formdata', data)
  },

  async adduser({ commit }, { account, name, email, group, level, phone }) {
    await adduser(account, name, email, group, level, phone)
    let data = await getallusers()
    commit('SET_alluser', data.data)
  },
  async edituser({ commit }, { account, name, email, group, level, phone, status, uuid }) {
    await edituser(account, name, email, group, level, phone, status, uuid)
    let data = await getallusers()
    commit('SET_alluser', data.data)
  },
  async deleteuser({ commit }, uuid) {
    await deleteuser(uuid)
    let data = await getallusers()
    commit('SET_alluser', data.data)
  },

  async resetpassword(a, { group, level, phone, password, uuid }) {
    await resetpassword(group, level, phone, password, uuid)
  },
}

const mutations = {
  SET_alluser(state, data) {
    state.alluser = data
  },
  SET_formdata(state, { level, group, status }) {
    state.allgroup = group
    state.alllevel = level
    state.allstatus = status
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
    state.alluser = []
    state.allgroup = []
    state.alllevel = []
    state.allstatus = []
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
