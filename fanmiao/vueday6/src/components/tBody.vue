<template>
  <tr>
    <td>{{list.id}}</td>
          <td>{{list.bookname}}</td>
          <td>{{list.author}}</td>
          <td>{{list.publisher}}</td>
          <td>
          <button @click="del(list.id)">删除</button>  
          <button @click="about(list)">详情</button>
          </td>
  </tr>
</template>

<script>
export default {
    props:['list'],
    methods:{
      del(id){
        this.$emit('del',id)
      },
      about(list){
        this.$emit('about',list)
      }
    }

    
}
</script>

<style>

</style>