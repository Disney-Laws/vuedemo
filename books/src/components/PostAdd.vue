<template>
  <div>
    <h3>添加图书</h3>
    <input type="text" placeholder="书名" v-model.trim="book.bookname">
    <br>
    <input type="text" placeholder="作者" v-model.trim="book.author">
    <br>
    <input type="text" placeholder="出版社" v-model.trim="book.publisher">
    <br>
    <button @click="addFn()" ref="addBtn">添加</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      book:{
        bookname:'',
        author:'',
        publisher:'',
      }
    }
  },
  methods:{
    addFn(){
     
      if(this.book.author==''||this.book.bookname==''||this.book.publisher=='') return alert('Please enter')
       this.$refs.addBtn.disabled=true
      this.$axios({
        url:'/api/addbook',
        method: 'POST',
        data: this.book
      }).then(res=>{
        console.log(res);
          if(res.data.status !=201)return alert('添加图书失败')
        alert(res.data.msg)  
        this.$nextTick(()=> this.$parent.getBookList())  
           this.$refs.addBtn.disabled=false       
      })     
      this.book={
        bookname:'',
        author:'',
        publisher:'',
      }
    }
  }
}
</script>

<style scoped>
 input {
   width: 200px;
   height: 35px;
   margin-bottom: 15px;
 }
 div {
  float: right;
  margin-right: 50px;
  text-align: center;
  width: 300px;
  height: 300px;
  border: 1px solid #000;
 }
 button{
  width: 50px;
  height: 40px;
 }
</style>