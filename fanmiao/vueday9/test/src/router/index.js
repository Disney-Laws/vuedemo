import Vue from 'vue';

import Home from '@/views/home.vue';
import Classify from '@/views/classify.vue';
import Orders from '@/views/orders.vue';
import My from '@/views/my.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/classify',
    component: Classify,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/my',
    component: My,
  },
];

export const router = new VueRouter({
  routes,
});

