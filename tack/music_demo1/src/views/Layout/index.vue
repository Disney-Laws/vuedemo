<template>
  <div style="padding-bottom:48px">
    <van-nav-bar :title="title" fixed/>

    <router-view></router-view>

    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  created() {
    this.title = this.$route.meta.title
  },
  watch: {
    $route(newVal, oldVal) {
      this.title = this.$route.meta.title
    },
  },
}
</script>

<style scoped></style>
