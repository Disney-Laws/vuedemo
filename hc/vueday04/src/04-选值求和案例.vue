<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-01 20:11:01
 * @LastEditors: sj
 * @LastEditTime: 2022-07-01 20:11:01
-->
<template>
  <div>
   <div v-for="(item, index) in arr" :key="index"  style="display: inline-block">
     <input type="checkbox" :value="item" v-model="current"><span>{{item}}</span>
   </div>
    <p>选中的和为：{{sum}}</p>
  </div>
</template>

<script>
export default {
 data(){
  return {
    arr:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
    current:[]
  }
 },
 computed:{
  sum(){
    return this.current.reduce((sum,next)=>sum+next,0)
  }
 }
}
</script>

<style>

</style>