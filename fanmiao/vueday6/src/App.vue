<template>
  <div id="app">
    <!-- 搜索-书本名称 -->
    <find-book @seach="seachFn"></find-book>
    <br><br>
    <!-- 图书渲染表格 -->
    <!-- <table class="books">
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
        <t-body
          v-for="item in list"
          :key="item.id"
          :list="item"
          @del="delFn"
          @about="aboutFn"
        ></t-body>
      </tbody>
    </table> -->
    <el-table :list="list" @del="delFn" @about="aboutFn"></el-table>
    <br><br>
    <!-- 新增图书 -->
    <add-book @add="addBookFn"></add-book>
    <!-- 图书详情 -->
    <div class="mask" v-if="isShow">
      <detail-book :book="detail" @closeDetail="closeDetailFn"></detail-book>
    </div>
  </div>
</template>

<script>
import findBook from './components/findBook.vue';
import tBody from './components/tBody.vue';
import addBook from './components/addBook.vue';
import detailBook from './components/detailBook.vue';
import DetailBook from './components/detailBook.vue';
import elTable from './components/elTable.vue';
import ElTable from './components/elTable.vue';
export default {
  data() {
    return {
      list: [],
      detail: {},
      isShow: false,
    };
  },
  components: {
    findBook,
    tBody,
    addBook,
    detailBook,
    DetailBook,
    elTable,
    ElTable,
  },
  mounted() {
    this.$axios({
      url: '/api/getbooks',
    }).then((res) => {
      // console.log(res);
      this.list = res.data.data;
      // console.log(this.list);
    });
  },
  methods: {
    seachFn(val) {
      return (this.list = val);
    },
    addBookFn(obj) {
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
          ...obj,
        },
      }).then((res) => {
        console.log(res);
        // console.log(this.list);
        if (res.status !== 200) {
          return alert('添加失败！');
        }
        alert('添加成功！');
        location.reload(true);
      });
    },
    delFn(id) {
      // console.log(id);
      this.$axios({
        url: '/api/delbook',
        method: 'GET',
        params: {
          id,
        },
      }).then((res) => {
        console.log(res);
        // console.log(this.list);
        if (res.data.status !== 200) {
          return alert('删除失败！');
        }
        alert('删除成功！');
        location.reload(true);
      });
    },
    aboutFn(list) {
      this.detail = list;
      this.isShow = true;
    },
    closeDetailFn(val) {
      this.isShow = val;
    },
  },
};
</script>

<style></style>
