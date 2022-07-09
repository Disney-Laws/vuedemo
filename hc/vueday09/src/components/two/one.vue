<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-09 19:05:51
 * @LastEditors: sj
 * @LastEditTime: 2022-07-09 19:29:31
-->
<template>
  <div>
  <div>
      <button >首页的下一级内容11</button>
      <hr>
    <span @click="$router.push({path:'/home/one/first'})">人间</span> &nbsp;&nbsp;&nbsp;
    <span @click="$router.push({path:'/home/one/second'})">世界</span>
  </div>
  <div style="border: 1px solid black">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>