<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 20:49:19
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 21:27:41
-->
<template>
  <div>
    <p>你喜欢的狗狗是：</p>
    <span v-for="(item, index) in name" :key="index">{{item}}</span>
  </div>
</template>

<script>
import EventBus from '../EventBus'
export default {
    data(){
      return {
        name:[]
      }
    },
    created () {
      EventBus.$on('dogName',val=>this.name.push(...val))
    }
}
</script>

<style>

</style>