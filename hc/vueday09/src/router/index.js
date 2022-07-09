/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-09 17:55:45
 * @LastEditors: sj
 * @LastEditTime: 2022-07-09 18:57:48
 */

import Vue from 'vue'
import VueRouter from "vue-router";

import MyHome from '@/views/MyHome'
import MyClass from '@/views/MyClass'
import MyOders from '@/views/MyOders'
import MyMine from '@/views/MyMine'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: MyHome
  },
  {
    path: '/class',
    component: MyClass
  },
  {
    path: '/oders',
    component: MyOders
  },
  {
    path: '/mine',
    component: MyMine
  },
]

const router = new VueRouter({
  routes
})

export default router
