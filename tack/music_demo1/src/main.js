import Vue from 'vue'
import App from './App.vue'
import '@/assets/mobile/flexible' //适配
import '@/assets/styles/reset.css' //初始化样式
import router from '@/router/index.js' //路由模块

// import {getRecommendListApi} from '@/apis'

import {
  Tabbar,
  TabbarItem,
  NavBar,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Image as VanImage,
  Icon,
  Search,
  Tag,
  List,
  Toast,
} from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VanImage)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Tag)
Vue.use(List)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
