import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Shop from '@/components/Shop'
import Good from '@/components/Good'
import Cart from '@/components/Cart'
import Login from '@/components/Login'
import Admin from '@/components/admin/Admin'
import Setcategory from '@/components/admin/Category'
import Setitem from '@/components/admin/Item'
import Setuser from '@/components/admin/User'
import Register from '@/components/Register'
import notfound from '@/components/404'
import { logout, member } from '@/api/request'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'home',
      path: '',
      component: Home,
      meta: {
        title: '首頁',
      },
    },
    {
      name: 'member',
      path: '/member',
      component: Member,
      meta: {
        title: '會員資料',
      },
    },
    {
      name: 'shop',
      path: '/shop',
      component: Shop,
      meta: {
        title: '商品列表',
      },
    },
    {
      path: '/goods',
      name: 'goods',
      component: Good,
      meta: {
        title: '商品詳情',
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        title: '購物車',
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
      path: '/admin',
      component: Admin,
      meta: {
        super: true,
      },
      redirect: '/admin/category',
      children: [
        {
          path: 'category',
          name: 'Setcategory',
          component: Setcategory,
          meta: {
            title: '分類管理',
            super: true,
          },
        },
        {
          path: 'items',
          name: 'Setitems',
          component: Setitem,
          meta: {
            title: '商品管理',
            super: true,
          },
        },
        {
          path: 'setuser',
          name: 'Setuser',
          component: Setuser,
          meta: {
            title: '會員管理',
            super: true,
          },
        },
      ],
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
router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.super) {
    let status = await member()
    if (status.group_id != 1) {
      next({ name: 'home' })
    }
  }
  if (to.path == '/logout') {
    logout()
  }
  next()
})

export default router
