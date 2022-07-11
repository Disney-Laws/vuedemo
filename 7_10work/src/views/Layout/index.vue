<template>
  <div>
    <van-nav-bar :title="this.$route.meta.title" fixed/>
    <router-view style="padding: 48px 0;"></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    
};
</script>

<style></style>
