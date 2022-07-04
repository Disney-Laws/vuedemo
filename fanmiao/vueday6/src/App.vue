<template>
  <div>
    <!-- 搜索-书本名称 -->
    <find-book></find-book>
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
        <t-body v-for="item in list" :key="item.id" :list="item"></t-body>
      </tbody>
    </table>
    <!-- 新增图书 -->
    <div></div>

  </div>
</template>

<script>
import findBook from './components/findBook.vue'
import tBody from './components/tBody.vue'
export default {
  data(){
    return{
      list:[]
    }
  },
  components:{
    findBook,
    tBody,
  },
  mounted(){
    this.$axios({
      url:'/api/getbooks'
    }).then(res => {
      // console.log(res);
      this.list = res.data.data
      console.log(this.list);
    }) 
  }


}
</script>

<style>

</style>