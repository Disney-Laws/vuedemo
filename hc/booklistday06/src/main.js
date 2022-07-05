/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-05 09:03:25
 * @LastEditors: sj
 * @LastEditTime: 2022-07-05 09:36:14
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
