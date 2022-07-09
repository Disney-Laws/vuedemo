/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-09 17:45:23
 * @LastEditors: sj
 * @LastEditTime: 2022-07-09 20:27:40
 */
import Vue from 'vue'
import App from './App.vue'
// import router from '@/router'
import router from '@/router2'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/fonts/iconfont.css'

import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn"
Vue.prototype.$axios =axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
