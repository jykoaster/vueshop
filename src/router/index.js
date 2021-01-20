import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Shop from '@/components/Shop'
import Good from '@/components/Good'
import Cart from '@/components/Cart'
import Login from '@/components/Login'
import Register from '@/components/Register'
import notfound from '@/components/404'
import request from '@/api/request'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'home',
      path: '',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      name: 'member',
      path: '/member',
      component: Member,
      meta: {
        title: 'Member',
      },
    },
    {
      name: 'shop',
      path: '/shop',
      component: Shop,
      meta: {
        title: 'Shop',
      },
    },
    {
      path: '/goods',
      name: 'goods',
      component: Good,
      meta: {
        title: 'Good',
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        title: 'Cart',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/logout',
      name: 'logout',
    },
    {
      path: '*',
      component: notfound,
      name: 'notfound',
      meta: {
        title: '404-頁面丟了',
      },
    },
  ],
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path == '/logout') {
    request.logout()
  }
  next()
})

export default router
