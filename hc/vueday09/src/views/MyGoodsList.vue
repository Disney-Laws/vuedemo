<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-09 19:42:15
 * @LastEditors: sj
 * @LastEditTime: 2022-07-09 20:34:29
-->
<template>
  <div>
    <MyTable :arr="list"></MyTable>
  </div>
</template>

<script>
import MyTable from '@/components/MyTable.vue'
export default {
  data(){
    return {
      list:[]
    }
  },
 created(){
  this.$axios({
     url: "/api/goods",
  }).then(res=>{
     this.list = res.data.data;
  })
 },
 components:{
  MyTable
 }
}
</script>

<style>

</style>