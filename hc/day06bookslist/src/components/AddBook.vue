<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 22:22:59
 * @LastEditors: sj
 * @LastEditTime: 2022-07-05 14:35:27
-->
<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击添加图书</el-button>

 <el-dialog
  title="请填写添加图书信息"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
   <el-input v-model.trim="bookname" placeholder="书名" style="width: 400px"></el-input>
   <el-input v-model.trim="author" placeholder="作者" style="width: 400px; margin: 10px 0;"></el-input>
   <el-input v-model.trim="publisher" placeholder="出版社" style="width: 400px"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addFn">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        bookname: '',
        author:'',
        publisher:'',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      addFn(){
        this.dialogVisible = false
        this.$axios({
          url:'/api/addbook',
          method: 'POST',
          data:{
            bookname:this.bookname,
            author:this.author,
            publisher: this.publisher,
          }
        }).then(res=>{
          this.$emit('add')
          alert(res.data.msg)
           
          })
      }
    }
  };
</script>
