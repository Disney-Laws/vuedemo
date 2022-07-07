/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-07 19:22:46
 * @LastEditors: sj
 * @LastEditTime: 2022-07-07 20:05:22
 */
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'
axios.defaults.baseURL= "https://www.escook.cn"
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
