<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-07 19:28:56
 * @LastEditors: sj
 * @LastEditTime: 2022-07-07 20:24:24
-->
<template>
  <div>
    <MyTable :list="list">
      <template #header>
          <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{scope.row.id}}</td>
        <td>{{scope.row.goods_name}}</td>
        <td>{{scope.row.goods_price}}</td>
        <td>
             <span
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            style="margin-left: 10px"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm">删除</button>
          <button class="btn btn-primary btn-sm">编辑</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
  components:{
    MyTable
  },
  data(){
    return {
      list:[]
    }
  },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      this.$axios({
        url:"/api/goods"
      }).then(res=>{
        console.log(res.data.data);
        this.list = res.data.data})
    }
  }
}
</script>

<style>

</style>