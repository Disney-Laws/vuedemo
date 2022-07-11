import Vue from 'vue'
import App from './App.vue'

import "@/styles/reset.css"
import "@/mobile/flexible.js"

// 引入路由对象
import router from '@/router'

// vant 一次性导入所有组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import {recommendMusicApi} from '@/api/Home'
async function fn(){
  const res = await recommendMusicApi()
  // console.log(res);
}
fn()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
