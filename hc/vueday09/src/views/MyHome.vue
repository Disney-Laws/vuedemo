<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-09 17:49:16
 * @LastEditors: sj
 * @LastEditTime: 2022-07-09 19:13:57
-->
<template>
  <div>
   <div>
     <router-link to="/home/one">新闻首页</router-link>
    <br>
    <router-link to="/home/two">首页活动</router-link>
   </div>

   <div>
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