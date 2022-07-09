<template>
  <div>
    <MyHeader title="TabBar"></MyHeader>
    <div style="margin-top: 45px">
      <router-view></router-view>
    </div>
    <MyTabBar :list='tabList'></MyTabBar>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyTabBar from '@/components/MyTabBar.vue'
export default {
 components:{
  MyHeader,
  MyTabBar,
 },
 data(){
  return {
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
 }
}
</script>

<style>

</style>