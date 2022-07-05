<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 22:22:33
 * @LastEditors: sj
 * @LastEditTime: 2022-07-05 14:49:12
-->
<template>
<div>
  <el-table
    :data="bookList"
    border
    style="width: 700px">
    <el-table-column
      fixed
      prop="id"
      label="序号"
      width="110"
      >   
    </el-table-column>
    <el-table-column
      prop="bookname"
      label="书名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="120">
    </el-table-column>
    <el-table-column
      prop="publisher"
      label="出版商"
      width="200">
    </el-table-column>
    <el-table-column
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click="bookInfo(scope.row.id)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
  <BookInfo v-show="isShow" ref="son"></BookInfo>
</div>
</template>

<script>
import BookInfo from './BookInfo.vue'
  export default {
    methods: {
      handleClick(row) {
      this.$axios({
        url:'/api/delbook',
        params:{
          id: row.id,
        }
      }).then(res=>{
        this.$parent.render()
        alert(res.data.msg)        
        })
      },
      bookInfo(id){
       const arr = this.bookList.filter(ele=>ele.id==id)
       this.$refs.son.open(arr)
      }
    },
   props:['bookList'],
   components:{
    BookInfo
   },
   data(){
    return {
      isShow: false
    }
   }
  }
</script>