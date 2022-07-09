/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-09 19:53:17
 * @LastEditors: sj
 * @LastEditTime: 2022-07-09 20:19:49
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import MyGoodsList from '@/views/MyGoodsList'
import MyGoodsSearch from '@/views/MyGoodsSearch'
import MyUserInfo from '@/views/MyUserInfo'

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/mygoodsList',
    component: MyGoodsList
  },
  {
    path: '/mygoodssearch',
    component: MyGoodsSearch
  },
  {
    path: '/myuserinfo',
    component: MyUserInfo
  },
]

const router = new VueRouter({
  routes
})
export default router