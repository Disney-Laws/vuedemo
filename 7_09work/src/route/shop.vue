<template>
  <div>
    <h3>订单页面</h3>
    <router-link to="/shop/children">体育的主页</router-link><br>
    <router-link to="/shop/children1">国内的体育</router-link><br>
    <router-link to="/shop/children2">国外的体育</router-link><br>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
