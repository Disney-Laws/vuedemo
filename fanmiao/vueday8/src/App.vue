<template>
  <div id="app">
    <!-- 自定义指令 -->
  <!-- <UseDirective></UseDirective> -->
  <!-- tabbar 案例 -->
  <MyHeader title="tabbar"></MyHeader>
  <MyTable></MyTable>
  <MyTabBar :arr="tabList"></MyTabBar>

  </div>
</template>

<script>

import UseDirective from './components/UseDirective.vue'
import MyHeader from './components/tabbar/MyHeader.vue'
import MyTabBar from './components/tabbar/MyTabBar.vue'
import MyTable from './components/tabbar/MyTable.vue'

export default {
  data(){
    return{

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
    MyTable,

  }
}
</script>

<style>
</style>
