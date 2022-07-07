<template>
  <div id="app">
    <!-- 自定义指令 -->
  <!-- <UseDirective></UseDirective> -->
  <!-- tabbar 案例 -->
  <MyHeader title="tabbar"></MyHeader>
  <!-- 设置上下内边距 -->
  <div style="margin-top:45px;margin-bottom:50px">
    <component :is="comName"></component>
  </div>
  <MyTabBar :arr="tabList" @changeCom="changeComFn"></MyTabBar>

  </div>
</template>

<script>

import UseDirective from './components/UseDirective.vue'
import MyHeader from './components/tabbar/MyHeader.vue'
import MyTabBar from './components/tabbar/MyTabBar.vue'

import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'

export default {
  data(){
    return{
      comName:'MyGoodsList',
      tabList: [
      {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList"
      },
      {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch"
      },
      {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo"
      }
  ]
    }
  },
  components: {
    UseDirective,
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,

  },
  methods:{
    changeComFn(val){
      this.comName=val
    }
  }
}
</script>

<style>
</style>
