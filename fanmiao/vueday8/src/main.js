import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局指令
Vue.directive('gfocus',{
  inserted(el){
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
