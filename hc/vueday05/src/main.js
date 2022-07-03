/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 20:00:56
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 21:34:40
 */
import Vue from 'vue'
import App from './App.vue'

import '@/assets/styles/base.css'
import '@/assets/styles/index.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
