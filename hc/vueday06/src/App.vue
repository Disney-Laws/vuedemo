<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 19:03:32
 * @LastEditors: sj
 * @LastEditTime: 2022-07-04 21:28:26
-->
<template>
  <div>
   <MyHeader title="购物车案例"></MyHeader>
   <MyGoods v-for="item in list" :key="item.id" :goods="item"></MyGoods>
   <MyFooter :arr="list" @changeAll="changeAllFn"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyGoods from './components/MyGoods.vue'
export default {
 components:{
  MyHeader,
  MyFooter,
  MyGoods,
 },
 data(){
  return {
    list:[]
  }
 },
 created(){
  this.$axios({
    url:"/api/cart",
    method:'GET',
  }).then(res=>{
    console.log(res);
    this.list=res.data.list
    })

 },
 methods:{
  changeAllFn(val){
    this.list.forEach(ele=>ele.goods_state=val)
  }
 },
}
</script>

<style>

</style>