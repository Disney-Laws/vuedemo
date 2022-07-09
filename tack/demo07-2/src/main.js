import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Index from '@/components/Index'
import News from '@/components/News'
import Sports from '@/components/Sports'

import Sports01 from '@/components/senden/Sports01'
import Sports02 from '@/components/senden/Sports02'
import Sports03 from '@/components/senden/Sports03'

import Sports04 from '@/components/senden/son/Sports01'
import Sports05 from '@/components/senden/son/Sports02'
import Sports06 from '@/components/senden/son/Sports03'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/news', component: News },
  {
    path: '/sports',
    component: Sports,
    children: [
      { path: '/', redirect: 'sports1' },
      { path: 'sports1', component: Sports01 ,children:[
        { path: '/', redirect: 'sports4' },
        { path: 'sports4', component: Sports04 },
        { path: 'sports5', component: Sports05 },
        { path: 'sports6', component: Sports06 },
      ]},
      { path: 'sports2', component: Sports02 },
      { path: 'sports3', component: Sports03 },
    ],
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
