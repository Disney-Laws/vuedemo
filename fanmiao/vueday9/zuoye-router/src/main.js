import Vue from 'vue'
import App from './App.vue'

import UI_Router from '@/views/UI_Router.vue'
import Contacts from '@/views/Contacts.vue'
import About from '@/views/About.vue'

import All_contacts from '@/components/All_contacts.vue'
import Alice from '@/components/Alice.vue'
import Bob from '@/components/Bob.vue'

import Blog from '@/components/Bob/blog.vue'
import Fax from '@/components/Bob/fax.vue'


// 1.下载路由
// 2.引入路由
import VueRouter from 'vue-router'
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
// 3.使用
Vue.use(VueRouter)
// 4.路由规则
const routes = [
  {
    path: '/uirouter',
    component: UI_Router,
  },
  {
    path: '/contacts',
    component: Contacts,
    children: [
      {
        path: 'all',
        component: All_contacts,
      },
      {
        path: 'alice',
        component: Alice,
      },
      {
        path: 'bob',
        component: Bob,
        children:[
          {
            path:'blog',
            component:Blog,
          },
          {
            path:'fax',
            component:Fax,
          },
        ]
        
      },
    ],
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/',
    redirect: '/uirouter',
  },
];
// 5.创建路由
const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 6.关联路由到Vue
  router,
}).$mount('#app')
