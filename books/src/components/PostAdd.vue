<template>
  <table>
  <thead>
      <tr>
      <th>序号</th>
      <th>书名</th>
      <th>作者</th>
      <th>出版社</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in bookList" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.bookname}}</td>
      <td>{{item.author}}</td>
      <td>{{item.publisher}}</td>
      <td><a href="javascript:;" @click.prevent="del(item.id)">删除</a>&nbsp; 
      <a href="javascript:;" @click="more(item)">详情</a></td>
    </tr>
  </tbody>
  </table>
</template>

<script>
export default {
  props:{
    bookList:{
      type:Array,
      default:()=>{}
    }
  },
  methods:{
    del(id){
      this.$axios({
        url:'/api/delbook',
        params:{
          id,
        }
      }).then(res=>{
        console.log(res);
        if(res.data.status !=200)return alert('删除图书失败')
         alert(res.data.msg)
         this.$emit('delBook',id)
      })
     
    },
    more(info){
      alert(`书名:${info.bookname}\n作者:${info.author}\n出版社:${info.publisher}`)
    }
  }
}
</script>

<style scoped>
table {
  float: left;
  border-collapse: collapse;
  text-align: center;
}
 th,
 td {
  width: 150px;
  height: 30px;
  border: 1px solid #000;
 }
</style>