import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import News from "@/views/News";
import Sports from "@/views/Sports";
import SportsHome from "@/views/SportsHome";
import SportsIn from "@/views/SportsIn";
import SportsOut from "@/views/SportsOut";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    component: Home,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/sports",
    component: Sports,
    children: [
      {
        path: "home",
        component: SportsHome,
      },
      {
        path: "in",
        component: SportsIn,
      },
      {
        path: "out",
        component: SportsOut,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
