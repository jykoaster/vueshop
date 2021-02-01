import Vue from 'vue'

export function logout() {
  Vue.axios
    .post('/api/v1/logout')
    .then(() => {
      alert('Logout Success')
    })
    .catch((error) => {
      alert(error.error)
    })
}
export function login(param) {
  Vue.axios
    .post('/api/v1/login', param)
    .then(() => {
      alert('success')
    })
    .catch((error) => {
      alert(error.error)
    })
}
export function captcha() {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/captcha').then((response) => {
      resolve(response.data)
    })
  })
}

export function member() {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/auth').then((response) => {
      resolve(response.data.result)
    })
  })
}
export function register(param) {
  return new Promise(function() {
    Vue.axios
      .post('/api/v1/register', param)
      .then(() => {
        alert('success')
      })
      .catch((error) => {
        alert(error.error)
      })
  })
}

export function getallcategorys() {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/category').then((response) => {
      resolve(response.data.result)
    })
  })
}

export default {
  logout,
  login,
  captcha,
  member,
  register,
  getallcategorys,
}
