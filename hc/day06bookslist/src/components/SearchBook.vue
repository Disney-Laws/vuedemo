<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 22:24:34
 * @LastEditors: sj
 * @LastEditTime: 2022-07-05 02:33:17
-->
<template>
  <div>
     <el-input v-model.trim="input" placeholder="请输入要查找的书名" style="width: 200px" 
  @keydown.enter.native="enterFn"></el-input>
   <el-button type="primary" plain @click="enterFn">查找</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      input:'',
    }
  },
  props:['bookList'],
  methods:{
      enterFn(){
        if(this.input.length==0) return alert("Please enter")
       const newList= this.bookList.filter(ele=>ele.bookname==this.input) 
       if(newList.length==0)return alert('没有找到对应的图书') 
       this.$parent.bookList = newList 
       this.input=''  
      },
}
}
</script>

<style>

</style>