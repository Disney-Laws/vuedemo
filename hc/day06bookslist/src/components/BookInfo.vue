<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-05 14:24:32
 * @LastEditors: sj
 * @LastEditTime: 2022-07-05 14:54:09
-->
<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open(arr) {
        this.$alert(`书名:${arr[0].bookname}\n 作者:${arr[0].author}\n 出版社:${arr[0].publisher}`)
      }
    }
  }
</script>
