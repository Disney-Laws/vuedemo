<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 20:45:49
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 21:25:59
-->
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
    <p @click="getNameFn">{{name}}</p>
  </div>
</template>

<script>
import EventBus from '../EventBus'
export default {
props:['src','name'],
data(){
  return {
    arr:[]
  }
},
methods:{
  getNameFn(){
    this.arr.push(this.name)
    EventBus.$emit('dogName',this.arr)
  },
}
}
</script>

<style>

</style>