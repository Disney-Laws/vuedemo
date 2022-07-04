<template>
  <tr>
    <td>{{list.id}}</td>
          <td>{{list.bookname}}</td>
          <td>{{list.author}}</td>
          <td>{{list.publisher}}</td>
          <td><button>删除</button> <button>编辑</button></td>
  </tr>
</template>

<script>
export default {
    props:{
        list:{
            type:Object(),
            default:() => ({})
        }
    }


}
</script>

<style>

</style>