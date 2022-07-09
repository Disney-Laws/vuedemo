import Vue from 'vue'
import App from './App.vue'
//导入路由
import VueRouter from 'vue-router'

import Index from '@/components/Index'
import Classification from '@/components/Classification'
import Order from '@/components/Order'
import My from '@/components/My'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Index,
  },
  {
    path: '/classification',
    component: Classification,
  },
  {
    path: '/order',
    component: Order,
  },
  {
    path: '/my',
    component: My,
  },
]

const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
