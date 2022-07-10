import Vue from 'vue'
import App from './App.vue'
// 引入路由对象
import router from '@/router'

// vant 一次性导入所有组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
