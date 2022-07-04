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
        <t-body></t-body>
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
  components:{
    findBook,
    tBody,
  }

}
</script>

<style>

</style>