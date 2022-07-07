import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios
// 全局指令
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },
})

Vue.directive('permission', {
  inserted(el, str) {
    //假设后端来的数据带了字段如果0是超级管理员，超级管理员可以看到编辑和删除
    //1是普通成员，可以看到删除
    if (str.value != '0') {
      el.children[1].style.display = 'none'
    } 
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
