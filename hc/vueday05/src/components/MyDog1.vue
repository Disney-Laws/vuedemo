<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 20:30:48
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 20:41:47
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 20:20:43
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 20:28:08
-->
<template>
  <div>
    <img :src="src" style="width: 100px; height: 100px">
    <p>{{name}}</p>
  </div>
</template>

<script>

export default {
props:['src','name']
}
</script>

<style>

</style>