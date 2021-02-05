import Vue from 'vue'
import qs from 'qs'
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

export function changedata(name, phone, email) {
  let data = qs.stringify({
    name: name,
    phone: phone,
    email: email,
  })
  return new Promise(function(resolve) {
    Vue.axios.put('/api/v1/user_information', data).then((response) => {
      if (response.data.result) {
        alert('修改成功')
      }
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

export function getallusers() {
  return new Promise(function(resolve) {
    Vue.axios.get('api/v1/user').then((response) => {
      resolve(response.data.result)
    })
  })
}

export function adduser(account, name, email, group, level, phone) {
  let data = new FormData()
  data.append('account', account)
  data.append('email', email)
  data.append('name', name)
  data.append('group_id', group)
  data.append('phone', phone)
  data.append('level_id', level)
  return new Promise(function(resolve) {
    Vue.axios
      .post('api/v1/user', data)
      .then((response) => {
        resolve(response.data.result)
      })
      .catch(() => {
        alert('新增失敗')
      })
  })
}

export function deleteuser(uuid) {
  return new Promise(function(resolve) {
    Vue.axios
      .delete('api/v1/user/' + uuid)
      .then((response) => {
        alert('刪除成功')
        resolve(response.data.result)
      })
      .catch(() => {
        alert('刪除失敗')
      })
  })
}

export function getallgroup() {
  return new Promise(function(resolve) {
    Vue.axios.get('api/v1/dropdown/group').then((response) => {
      resolve(response.data.result)
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
export function getproducts(uuid, page) {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/product/' + uuid, { params: { page: page } }).then((response) => {
      resolve(response.data.result)
    })
  })
}

export function getcategory1() {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/category1').then((response) => {
      resolve(response.data.result)
    })
  })
}

export function getitemdetail(uuid) {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/product/detail/' + uuid).then((response) => {
      resolve(response.data.result)
    })
  })
}

export function deletecategory(level, id) {
  return new Promise(function(resolve) {
    Vue.axios
      .delete('/api/v1/' + level + '/' + id)
      .then((response) => {
        if (response.data.result == 1) {
          alert('刪除成功')
        }
        resolve(response.data.result)
      })
      .catch((error) => {
        alert('刪除失敗')
        resolve(error.error)
      })
  })
}

export function editcategory(level, id, name, upperid, paramid, paramname) {
  let data = qs.stringify({
    [paramname]: name,
    [paramid]: upperid,
  })
  return new Promise(function(resolve) {
    Vue.axios
      .put('/api/v1/' + level + '/' + id, data)
      .then((response) => {
        if (response.data.result) {
          alert('修改成功')
        }
        resolve(response.data.result)
      })
      .catch((error) => {
        alert('修改失敗')
        resolve(error.error)
      })
  })
}

export function addcategory(level, name, upperid, paramid, paramname) {
  let data = new FormData()
  data.append(paramid, upperid)
  data.append(paramname, name)
  return new Promise(function(resolve) {
    Vue.axios
      .post('/api/v1/' + level, data)
      .then((response) => {
        if (response.data.result) {
          alert('新增成功')
        }
        console.log(response.data.result)
        resolve(response.data.result)
      })
      .catch((error) => {
        alert('新增失敗')
        resolve(error.error)
      })
  })
}

export function getlevelcate(level) {
  return new Promise(function(resolve) {
    Vue.axios
      .get('/api/v1/category' + level)
      .then((response) => {
        resolve(response.data.result)
      })
      .catch((error) => {
        alert(error.error)
        resolve(error.error)
      })
  })
}

export function getcartitems() {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/shopping_cart').then((response) => {
      resolve(response.data.result)
    })
  })
}

export function addcartitem(param) {
  let data = new FormData()
  data.append('uuid', param.id)
  data.append('number', param.count)
  return new Promise(function(resolve) {
    Vue.axios.post('/api/v1/shopping_cart', data).then((response) => {
      if (response.data.result) {
        alert('加入成功')
      } else {
        alert('加入失敗')
      }
      resolve(response.data.result)
    })
  })
}

export function deletecartitem(id) {
  return new Promise(function(resolve) {
    Vue.axios.delete('/api/v1/shopping_cart/' + id).then((response) => {
      if (response.data.result) {
        alert('刪除成功')
      }
      resolve(response.data.result)
    })
  })
}
export default {}
