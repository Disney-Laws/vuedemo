<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 19:07:42
 * @LastEditors: sj
 * @LastEditTime: 2022-07-04 19:45:15
-->
<template>
  <tr>
    <td><input type="checkbox" v-model="obj.checked"></td>
    <td>{{obj.name}}</td>
    <td>{{obj.price}}</td>
    <td><button @click="subFn">- </button> {{ obj.num }} <button @click="obj.num++"> +</button></td>
    <td>{{obj.price*obj.num}}</td>
    <td><button @click="del(obj.name)">删除</button></td>
  </tr>
</template>

<script>
export default {
 props:{
  obj:{
    type:Object,
    default:()=>{return{}}
  }
 },
 methods:{
  subFn(){
    if(this.obj.num<=1)return this.obj.num = 1
    this.obj.num--
  },
   del(val){
   const index = this.$parent.goodList.findIndex(ele=>ele.name==val)
   this.$parent.goodList.splice(index, 1)
 }
 },

}

</script>

<style>

</style>