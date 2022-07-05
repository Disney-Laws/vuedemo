/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 22:17:41
 * @LastEditors: sj
 * @LastEditTime: 2022-07-05 00:32:26
 */
import Vue from 'vue'

import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
Vue.prototype.$axios = axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Table, Input, Button } from 'element-ui';
import App from './App.vue'
Vue.use(ElementUI);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Table);
Vue.use(Input);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
