/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-01 17:45:37
 * @LastEditors: sj
 * @LastEditTime: 2022-07-01 19:29:52
 */
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'
Vue.config.productionTip = false

Vue.filter('forDate', (val) => moment(val).format('YYYY-MM-DD HH:mm:ss'))

new Vue({
  render: h => h(App),
}).$mount('#app')
