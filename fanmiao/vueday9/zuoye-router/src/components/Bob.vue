<template>
  <div>
    <h1>Bob</h1>
    <ul>
        <li><router-link to="/contacts/bob/blog">blog</router-link></li>
        <li><router-link to="/contacts/bob/fax">fax</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>