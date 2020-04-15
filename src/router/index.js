import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import registered from '@/views/registered'
import appPubic from '@/views/appPubic'
import detail from '@/views/detail'

import home from '@/views/home/home'
import homeList from '@/views/home/homeList'
import internationalBrand from '@/views/home/internationalBrand'
import mensWear from '@/views/home/mensWear'
import womensWear from '@/views/home/womensWear'

import classify from '@/views/classify/classify'

import shoppingCart from '@/views/shoppingCart/shoppingCart'

import personalCenter from '@/views/personal/personalCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: '登录页', component: login},
    {path: '/registered', name: '注册页', component: registered},
    {
      path: '/appPubic',
      name: '公共页',
      component: appPubic,
      children: [{
        path: '/appPubic/home',
        name: '首页',
        component: home,
        children: [{
          path: '/appPubic/home/homeList',
          name: '首页列表',
          component: homeList
        }, {
          path: '/appPubic/home/internationalBrand',
          name: '品牌国际',
          component: internationalBrand
        }, {
          path: '/appPubic/home/mensWear',
          name: '男装',
          component: mensWear
        }, {
          path: '/appPubic/home/womensWear',
          name: '女装',
          component: womensWear
        }]
      }, {
        path: '/appPubic/classify',
        name: '分类',
        component: classify
      }, {
        path: '/appPubic/shoppingCart',
        name: '购物车',
        component: shoppingCart
      }, {
        path: '/appPubic/personalCenter',
        name: '个人中心',
        component: personalCenter
      }]
    },
    {path: '/detail', name: '详情', component: detail}
  ]
})
