import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Helloworld from '@/components/HelloWorld';
import Shop from '@/components/Shop';
import Good from'@/components/Good';
Vue.use(Router);
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router ({
	routes:[{
		name:'home',
		path:'',
		component:Home,
		meta:{
			title:'Home'
		}
	},
	{
		name:'helloworld',
		path:'/helloworld',
		component:Helloworld,
		meta:{
			title:'Helloworld'
		}
	},
	{
		name:'shop',
		path:'/shop',
		component:Shop,
		meta:{
			title:'Shop'
		}
	},
	{
		path:'/goods/:id',
		component:Good
	}
	]
})