import Vue from 'vue'
// 引入elewent组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3006';
Vue.prototype.$axios = axios

import './assets/styles/index.css'

new Vue({
  el: '#app',
  render: (h) => h(App),
}).$mount('#app');
