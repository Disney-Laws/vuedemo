import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';

import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios=axios

import MyGoodsList from '@/views/MyGoodsList.vue'
import MyGoodsSearch from '@/views/MyGoodsSearch.vue'
import MyUserInfo from '@/views/MyUserInfo.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mygoodslist',
    component: MyGoodsList,
  },
  {
    path: '/mygoodssearch',
    component: MyGoodsSearch,
  },
  {
    path: '/myuserinfo',
    component: MyUserInfo,
  },
];

const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
