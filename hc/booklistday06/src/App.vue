<template>
  <div>
<SearchBook :bookList="bookList"></SearchBook>
<GetBooks :bookList="bookList" @delBook="delBookFn"></GetBooks>
<AddBook></AddBook>
  </div>
</template>

<script>
import SearchBook from './components/SearchBook.vue'
import GetBooks from './components/GetBooks.vue'
import AddBook from './components/AddBook.vue'
export default {
   data(){
  return {
    bookList:[]
  }
 },
 components:{
  SearchBook,
  GetBooks,
  AddBook,
 },
 created(){
  this.getBookList()
 },
methods:{
  delBookFn(id){
   const index= this.bookList.findIndex(ele=>ele.id==id)
   this.bookList.splice(index,1);
  },
  getBookList(){
      this.$axios({
    url:'/api/getbooks'
  }).then(res=>{
    console.log(res);
    this.bookList=res.data.data
    })
  }
}
 }
</script>

<style>

</style>