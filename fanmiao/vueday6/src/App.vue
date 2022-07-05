<template>
  <div>
    <!-- 搜索-书本名称 -->
    <find-book @seach="seachFn"></find-book>
    <!-- 图书渲染表格 -->
    <table>
      <thead>
        <tr>
          <td>序号</td>
          <td>书名</td>
          <td>作者</td>
          <td>出版商</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <t-body v-for="item in list" 
        :key="item.id" 
        :list="item"
        @del="delFn"
        ></t-body>
      </tbody>
    </table>
    <!-- 新增图书 -->
    <div>
      <add-book @add="addBookFn"></add-book>
    </div>

  </div>
</template>

<script>
import findBook from './components/findBook.vue'
import tBody from './components/tBody.vue'
import addBook from './components/addBook.vue'
export default {
  data(){
    return{
      list:[]
    }
  },
  components:{
    findBook,
    tBody,
    addBook,
  },
  mounted(){
    this.$axios({
      url:'/api/getbooks'
    }).then(res => {
      // console.log(res);
      this.list = res.data.data
      // console.log(this.list);
    }) 
  },
  methods:{
    seachFn(val){
      return this.list=val
    },
    addBookFn(obj){
      this.$axios({
      url:'/api/addbook',
      method:'POST',
      data:{
        appkey:'7250d3eb-18e1-41bc-8bb2-11483665535a',
        ...obj
      }
    }).then(res => {
      console.log(res);
      // console.log(this.list);
    }) 
    },
    delFn(id){
      this.$axios({
      url:'/api/delbook',
      method:'GET',
      params:{
        id,
      }
    }).then(res => {
      console.log(res);
      // console.log(this.list);
    }) 
    }
  }


}
</script>

<style>

</style>