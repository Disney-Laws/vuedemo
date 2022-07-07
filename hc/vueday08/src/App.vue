<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-07 19:22:46
 * @LastEditors: sj
 * @LastEditTime: 2022-07-07 19:35:09
-->
<template>
  <div>
<MyHeader title="TabBar"></MyHeader>
<MyTabBar :arr="tabList"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'
export default {
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
 },
 components:{
  MyHeader,
  MyTabBar
 }
}
</script>

<style>

</style>