<template>
  <div id="app">
   <router-link to="/index">主页</router-link>&nbsp;
   <router-link to="/news">新闻</router-link>&nbsp;
   <router-link to="/sports">体育</router-link>&nbsp;
   <div>
    <router-view></router-view>
   </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
</style>
