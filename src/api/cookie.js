import Cookies from 'js-cookie'

const TOKEN = 'JWTTOKEN'

export default {
  gettoken() {
    return Cookies.get(TOKEN)
  },
  settoken(key) {
    return Cookies.set(TOKEN, key)
  },
  removetoken() {
    return Cookies.remove(TOKEN)
  },
}
