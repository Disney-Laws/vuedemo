<template>
  <div>
    <router-link to="/index">首页</router-link>&nbsp;
    <router-link to="/classification">分类</router-link>&nbsp;
    <router-link to="/order">订单</router-link>&nbsp;
    <router-link to="/my">我的</router-link>&nbsp;
    <div>
        <p>显示路由切换的页面</p>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
