<template>
  <tr>
    <td>{{list.id}}</td>
          <td>{{list.bookname}}</td>
          <td>{{list.author}}</td>
          <td>{{list.publisher}}</td>
          <td><button @click="del(list.id)">删除</button> <button>详情</button></td>
  </tr>
</template>

<script>
export default {
    props:['list'],
    methods:{
      del(id){
        this.$emit('del',id)
      }
    }

    
}
</script>

<style>

</style>