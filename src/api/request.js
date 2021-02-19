import Vue from 'vue'
import qs from 'qs'
export function logout() {
  Vue.axios
    .post('/api/v1/logout')
    .then(() => {
      alert('登出成功')
    })
    .catch((error) => {
      alert(error.error)
    })
}
export function login(param) {
  Vue.axios
    .post('/api/v1/login', param)
    .then(() => {
      alert('登入成功')
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
    Vue.axios
      .put('/api/v1/user_information', data)
      .then((response) => {
        if (response.data.result) {
          alert('修改個人資料成功')
        }
        resolve(response.data.result)
      })
      .catch(() => {
        alert('修改個人資料失敗')
      })
  })
}

export function register(param) {
  return new Promise(function() {
    Vue.axios
      .post('/api/v1/register', param)
      .then(() => {
        alert('註冊成功')
      })
      .catch(() => {
        alert('註冊失敗')
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
        alert('新增會員成功')
        resolve(response.data.result)
      })
      .catch(() => {
        alert('新增會員失敗')
      })
  })
}

export function edituser(account, name, email, group, level, phone, status, uuid) {
  let data = qs.stringify({
    account: account,
    name: name,
    email: email,
    group_id: group,
    level_id: level,
    phone: phone,
    active: status,
  })
  return new Promise(function(resolve) {
    Vue.axios
      .put('api/v1/user/' + uuid, data)
      .then((response) => {
        alert('修改會員資料成功')
        resolve(response.data.result)
      })
      .catch(() => {
        alert('修改會員資料失敗')
      })
  })
}

export function resetpassword(group, level, phone, password, uuid) {
  let data = qs.stringify({
    group_id: group,
    level_id: level,
    phone: phone,
    password: password,
    password_confirmation: password,
  })
  return new Promise(function(resolve) {
    Vue.axios
      .put('api/v1/user/' + uuid, data)
      .then((response) => {
        alert('重置密碼成功')
        resolve(response.data.result)
      })
      .catch(() => {
        alert('重置密碼失敗')
      })
  })
}
export function deleteuser(uuid) {
  return new Promise(function(resolve) {
    Vue.axios
      .delete('api/v1/user/' + uuid)
      .then((response) => {
        alert('刪除會員成功')
        resolve(response.data.result)
      })
      .catch(() => {
        alert('刪除會員失敗')
      })
  })
}

export function useradminformdata() {
  const group = new Promise(function(resolve) {
    Vue.axios.get('api/v1/dropdown/group?all=hide').then((response) => {
      resolve(response.data.result)
    })
  })
  const level = new Promise(function(resolve) {
    Vue.axios.get('api/v1/dropdown/level?all=hide').then((response) => {
      resolve(response.data.result)
    })
  })
  const status = new Promise(function(resolve) {
    Vue.axios.get('api/v1/dropdown/active?all=hide').then((response) => {
      resolve(response.data.result)
    })
  })
  return Promise.all([group, level, status]).then((result) => {
    const res = {
      group: result[0],
      level: result[1],
      status: result[2],
    }
    return res
  })
}

export function getallcategorys() {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/category').then((response) => {
      resolve(response.data.result)
    })
  })
}
export function getproducts(uuid, page, status) {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/product/' + status + '/' + uuid, { params: { page: page } }).then((response) => {
      resolve(response.data.result)
    })
  })
}

export function searchitem(srch) {
  return new Promise(function(resolve) {
    Vue.axios.get('/api/v1/product/search?q=' + srch).then((response) => {
      resolve(response.data.result)
    })
  })
}

export function getitemsbyurl(url) {
  return new Promise(function(resolve) {
    Vue.axios.get(url).then((response) => {
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
          alert('刪除分類成功')
        }
        resolve(response.data.result)
      })
      .catch((error) => {
        alert('刪除分類失敗')
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
          alert('修改分類成功')
        }
        resolve(response.data.result)
      })
      .catch((error) => {
        alert('修改分類失敗')
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
          alert('新增分類成功')
        }
        resolve(response.data.result)
      })
      .catch((error) => {
        alert('新增分類失敗')
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
        // alert('刪除成功')
      }
      resolve(response.data.result)
    })
  })
}

export function additem(cateid, name, description, suggest, price, residual, status, image) {
  let data = new FormData()
  data.append('category3_uuid', cateid)
  data.append('image', image, image.name)
  data.append('name', name)
  data.append('description', description)
  data.append('suggested_price', suggest)
  data.append('price', price)
  data.append('residual', residual)
  data.append('active', status)
  return new Promise(function(resolve) {
    Vue.axios.post('/api/v1/product', data).then((response) => {
      if (response.data.result) {
        alert('添加商品成功')
      }
      resolve(response.data.result)
    })
  })
}
export function edititem(cateid, name, description, suggest, price, residual, status, image, uuid) {
  let data = qs.stringify({
    category3_uuid: cateid,
    name: name,
    description: description,
    suggested_price: suggest,
    price: price,
    residual: residual,
    active: status,
  })
  let imgobj = null
  if (image && typeof image != 'string') {
    imgobj = new FormData()
    imgobj.append('image', image, image.name)
  }

  return new Promise(function(resolve) {
    Vue.axios.put('api/v1/product/' + uuid, data).then((response) => {
      resolve(response.data.result)
    })
    if (image && typeof image != 'string') {
      Vue.axios.post('api/v1/product/image/' + uuid, imgobj).then((response) => {
        resolve(response.data.result)
      })
    }
  })
}
export default {}
