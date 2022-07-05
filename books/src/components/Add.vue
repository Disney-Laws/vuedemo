<template>
  <div>
    <input type="text" placeholder="请输入书名" v-model.trim="name" @keydown.enter="enter">
    <button @click="comeback" v-show="isShow">返回全部列表</button>
  </div>
</template>

<script>
export default {
 data(){
  return {
    name:'',
    isShow: false
  }
 },
 props:['bookList'],
 methods:{
  enter(){
      if(this.name.length==0) return alert("Please enter")
       const newList= this.bookList.filter(ele=>ele.bookname==this.name) 
       if(newList.length==0)return alert('没有找到对应的图书') 
       this.$parent.bookList = newList 
       this.name='' 
       this.isShow =true
  },
  comeback(){
    this.$parent.getBookList()
    this.isShow =false
  }
 }
}
</script>

<style scoped>
 input {
  width: 300px;
  height: 30px;
 }
</style>