import Vue from "vue";
import App from "./App.vue";

import Home from "@/views/Home";
import Cate from "@/views/Cate";
import Order from "@/views/Order";
import My from "@/views/My";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    name: "home",
  },
  {
    path: "/cate",
    component: Cate,
    name: "Cate",
  },
  {
    path: "/order",
    component: Order,
    name: "Order",
  },
  {
    path: "/my",
    component: My,
    name: "My",
  },
];

const router = new VueRouter({
  routes, // routes是固定key(传入规则数组)
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
