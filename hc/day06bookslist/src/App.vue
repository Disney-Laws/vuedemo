<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 22:17:41
 * @LastEditors: sj
 * @LastEditTime: 2022-07-05 14:26:08
-->
<template>
  <div id="app">
    <SearchBook :bookList="bookList"></SearchBook>
    <BooksList :bookList="bookList"></BooksList>
    <AddBook @add=render></AddBook>
  </div>
</template>

<script>
import BooksList from './components/BooksList.vue'
import AddBook from './components/AddBook.vue'
import SearchBook from './components/SearchBook.vue'
export default {
  data(){
    return {
      bookList:[]
    }
  },
 components:{
  BooksList,
  AddBook,
  SearchBook,

 },
     created(){
     this.render()
    },
    methods:{
      render(){
      this.$axios({
        url:'/api/getbooks',
      }).then(res=>{
        // console.log(res);
        this.bookList=res.data.data
        // console.log(this.bookList);
      })
      }
    }
}
</script>

<style>

</style>