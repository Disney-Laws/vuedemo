import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
//二级嵌套
// import Home from "@/route/home.vue";
// import Tab from "@/route/tab";
// import Shop from "@/route/shop";
// import My from "@/route/my";
// import Children from "@/route/children";
// import Children1 from "@/route/children1";
// import Children2 from "@/route/children2";
//三级嵌套
import one1 from "@/route/three/1_1";
import one2 from "@/route/three/1_2";
import one3 from "@/route/three/1_3";
import two1 from "@/route/three/2_1";
import two2 from "@/route/three/2_2";
import two3 from "@/route/three/2_3";
import three1 from "@/route/three/3_1";
import three2 from "@/route/three/3_2";
Vue.use(VueRouter);
const routes = [
  // {
  //   path: "/",
  //   redirect: "/home",
  // },
  // {
  //   path: "/home",
  //   component: Home,
  // },
  // {
  //   path: "/tab",
  //   component: Tab,
  // },
  // {
  //   path: "/shop",
  //   component: Shop,
  //   children: [
  //     {
  //       path: "children",
  //       component: Children
  //     },
  //     {
  //       path: "children1",
  //       component: Children1
  //     },
  //     {
  //       path: "children2",
  //       component: Children2
  //     },
  //   ],
  // },
  // {
  //   path: "/my",
  //   component: My,
  // },
  //三级嵌套
  { path: "/one1", component: one1 },
  {
    path: "/one2",
    component: one2,
    children: [
      { path: "two1", component: two1 },
      {
        path: "two2",
        component: two2,
        children: [
          { path: "three1", component: three1 },
          { path: "three2", component: three2 },
        ],
      },
      { path: "two3", component: two3 },
    ],
  },
  { path: "/one3", component: one3 },
];
const router = new VueRouter({
  routes,
});
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
