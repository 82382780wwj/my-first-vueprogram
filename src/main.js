// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
//import Router from './router'
import Router from 'vue-router'
//import MintUI from 'mint-ui';
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//引入项目模块组件
import home from './components/home.vue'
import introduce from './components/introduce.vue'
import etc from './components/etc.vue'
import contact from './components/contact.vue'
import happy from './components/happy.vue'
import hobby from './components/hobby.vue'
import detail from './components/detail.vue'

// 使用router
Vue.use(Router)

// 使用MintUI
//Vue.use(MintUI);
Vue.use(Element);

Vue.use(VueResource);
//引入css
require('./assets/css/base.css');

// 定义路由
const routes = [
  {
    path:'/',
    redirect: '/home' //重定向，设置默认路由
  },
  {
    path:'/home',
    component: home
  },
  {
    path:'/introduce',
    component: introduce
  },
  {
    path:'/etc',
    component: etc
  },
  {
    path:'/contact',
    component: contact
  },
  {
    path:'/happy',
    component: happy
  },
  {
    path:'/hobby',
    component: hobby
  },
  {
    name:'detail',
    path:'/detail',
    component: detail
  }
]
const router = new Router({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
