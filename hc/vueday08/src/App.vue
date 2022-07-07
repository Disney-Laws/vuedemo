<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-07 19:22:46
 * @LastEditors: sj
 * @LastEditTime: 2022-07-07 20:51:46
-->
<template>
  <div>
<MyHeader title="TabBar"></MyHeader>
<div style="margin-top: 45px">
<component :is="comName" ></component>
</div>
<MyTabBar :arr="tabList" @change="changeFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'

import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
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
],
 comName: "MyGoodsList"
  } 
 },
 components:{
  MyHeader,
  MyTabBar,
MyUserInfo,
MyGoodsSearch,
MyGoodsList
 },
 methods:{
  changeFn(name){
     this.comName=name
  }
 }
}
</script>

<style>

</style>