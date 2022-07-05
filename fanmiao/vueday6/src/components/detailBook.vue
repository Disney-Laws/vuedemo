<template>
  <div class="detailBook">
   <table>
    <tr>
        <td>图书ID:</td>
        <td>{{book.id}}</td>
    </tr>
    <tr>
        <td>书名:</td>
        <td>{{book.bookname}}</td>
    </tr>
    <tr>
        <td>作者:</td>
        <td>{{book.author}}</td>
    </tr>
    <tr>
        <td>出版商:</td>
        <td>{{book.publisher}}</td>
    </tr>
   </table>
    
  </div>
</template>

<script>
export default {
    props:['book']
}
</script>

<style>

</style>