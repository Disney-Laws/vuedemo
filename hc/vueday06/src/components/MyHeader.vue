<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 19:56:47
 * @LastEditors: sj
 * @LastEditTime: 2022-07-04 20:13:06
-->
<template>
  <div class="my-header" :style="{background:background ,color} ">{{title}}</div>
</template>

<script>
export default {
 props:{
  background:{
    type: String,
    default: '#1d7bff'
  },
  color:{
    type: String,
    default:'#fff'
  },
  title:{
    type: String,
   required: true
  }
  
 }
}
</script>

<style lang="less" scoped>
  .my-header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>