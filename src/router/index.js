import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Member from '@/components/Member';
import Shop from '@/components/Shop';
import Good from '@/components/Good';
import Cart from '@/components/Cart';
import Login from '@/components/Login';
Vue.use(Router);


export default new Router({
  routes: [{
      name: 'home',
      path: '',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      name: 'member',
      path: '/member',
      component: Member,
      meta: {
        title: 'Member'
      }
    },
    {
      name: 'shop',
      path: '/shop',
      component: Shop,
      meta: {
        title: 'Shop'
      }
    },
    {
      path: '/goods',
      name:'goods',
      component: Good,
      meta: {
        title: 'Good'
      }
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart,
      meta: {
        title: 'Cart'
      }
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})