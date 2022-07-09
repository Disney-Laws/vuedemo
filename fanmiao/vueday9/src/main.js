import Vue from 'vue';
import App from './App.vue';

import Find from '@/views/Find.vue'
import My from '@/views/My.vue';
import Part from '@/views/Part.vue';
// 引入404页面
import NotFound from '@/views/NotFound.vue'

// 1、下载路由
// 2、引入路由
import VueRouter from 'vue-router';
// 3、使用
Vue.use(VueRouter);
// 4、创建路由规则
const routes = [
  {
    path: '/find',
    name: 'Find', //给路由起名字
    component: Find,
  },
  {
    path: '/my',
    name: 'My',
    component: My,
  },
  {
    path: '/part',
    name: 'Part',
    component: Part,
  },
  // 导航重定向
  {
    path: '/',
    redirect: '/find',
  },
  {
    path: '*',
    component: NotFound,
  },
];
// 5、创建路由
const router = new VueRouter({
  routes,
  // 路由在地址栏的模式
  // mode:'history',
})

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 6、关联到vue实例
  router,
}).$mount('#app');
