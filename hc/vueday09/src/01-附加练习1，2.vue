<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-09 19:34:39
 * @LastEditors: sj
 * @LastEditTime: 2022-07-09 19:34:39
-->
<template>
  <div>
    <router-link to="/home">首页</router-link> &nbsp;
    <router-link to="/class">分类</router-link> &nbsp;
    <router-link to="/oders">订单</router-link> &nbsp;
    <router-link to="/mine">我的</router-link> &nbsp;

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