<template>
  <div>
    <h1>嵌套路由</h1>
    <router-link to="/index">主页</router-link>&nbsp;
    <router-link to="news">新闻</router-link>&nbsp;
    <router-link to="sports">体育</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style scoped></style>
