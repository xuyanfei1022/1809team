import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import fenlei from '@/pages/fenlei'
import pinpai from '@/pages/pinpai'
import leixing from '@/pages/leixing'
import login from  '@/pages/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei,
    },
    {
      path:'/pinpai/goodsList/:id',
      name:'pinpai',
      component:pinpai
    },
    {
      path:'/leixing/goodsList/:id',
      name:'leixing',
      component:leixing
    },
    {
      path:"/login",
      name:'login',
      component:login
    }

  ]
})
