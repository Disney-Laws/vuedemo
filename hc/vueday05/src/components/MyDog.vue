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
    <img :src="img" alt="" style="width: 100px; height: 100px">
    <p>我是一条咸鱼</p>
  </div>
</template>

<script>
import img from '../assets/xin2.jpg'
export default {
  data(){
    return {
      img : img,
    }
  }
}
</script>

<style>

</style>