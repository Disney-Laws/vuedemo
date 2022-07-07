import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";
Vue.config.productionTip = false;
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
}),
Vue.directive("showshow", {
  inserted(el) {
    // el.style.display='none'
    // console.log(el.style.display);
    // console.dir(el.id);
    if (el.id != 1 && el.id != 2 && el.id != 3) {
      el.style.display = "none";
    }else {
      el.style.display = ""
    }
  },
});
