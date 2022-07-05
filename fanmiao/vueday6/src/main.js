import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3006';
Vue.prototype.$axios = axios

import './assets/styles/index.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
