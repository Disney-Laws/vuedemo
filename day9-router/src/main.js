import Vue from "vue";
import App from "./App.vue";
import Find from "@/views/Find"; // @是src的绝对地址
import My from "@/views/My";
import Part from "@/views/Part";
import NotFound from "@/views/NotFound";
import Recommend from "@/views/Second/Recommend";
import Ranking from "@/views/Second/Ranking";
import SongList from "@/views/Second/SongList";
import VueRouter from "vue-router";

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};

// 3. 注册全局组件
Vue.use(VueRouter);

// 4. 规则数组
const routes = [
  { path: "/", redirect: "/find" },
  {
    path: "/find",
    component: Find,
    name: "Find",
    children: [
      { path: "ranking", component: Ranking },
      { path: "recommend", component: Recommend },
      { path: "songList", component: SongList },
    ],
  },
  { path: "/my", component: My, name: "My" },
  { path: "/part", component: Part, name: "Part" },
  { path: "*", component: NotFound },
];
// 5. 生成路由对象
const router = new VueRouter({
  routes, // routes是固定key(传入规则数组)
  mode: "history", // 默认不写是"hash"
});

Vue.config.productionTip = false;

const islogin = true;
router.beforeEach((to, from, next) => {
  if (to.path !== "/part") {
    next("part");
  } else {
    next();
  }
});
// 6. 路由对象注入到vue实例中, this可以访问$route和$router

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
