import Vue from 'vue';
import App from './App.vue';

import Find from '@/views/Find.vue'
import My from '@/views/My.vue';
import Part from '@/views/Part.vue';

// 1、下载路由
// 2、引入路由
import VueRouter from 'vue-router';
// 3、使用
Vue.use(VueRouter);
// 4、创建路由规则
const routes = [
  {
    path: '/find',
    component: Find,
  },
  {
    path: '/my',
    component: My,
  },
  {
    path: '/part',
    component: Part,
  },
];
// 5、创建路由
const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 6、关联到vue实例
  router,
}).$mount('#app');
