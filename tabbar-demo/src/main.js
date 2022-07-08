import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";

import axios from "axios";
axios.defaults.baseURL = "http://www.escook.cn";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
