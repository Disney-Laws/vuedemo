<template>
  <div>
    <!-- <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/tab">分类</router-link>
      <router-link to="/shop">订单</router-link>
      <router-link to="/my">我的</router-link>
    </div>
    
    <div>
      <router-view></router-view>
    </div> -->
    <!-- 三级嵌套 -->
    <router-link to="/one1">1.1</router-link>&nbsp;
    <router-link to="/one2">1.2</router-link>&nbsp;
    <router-link to="/one3">1.3</router-link>&nbsp;
    <hr>
    <div>
      <router-view></router-view>
    </div> 
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
