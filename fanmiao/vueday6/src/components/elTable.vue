<template>
  <el-table :data="list" style="width: 800px">
    <el-table-column prop="id" label="序号" width="50"> </el-table-column>
    <el-table-column prop="bookname" label="书名" width="180">
    </el-table-column>
    <el-table-column prop="author" label="作者" width="180"> </el-table-column>
    <el-table-column prop="publisher" label="出版商" width="200">
    </el-table-column>
    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="del(scope.row.id)" type="text" size="small"
          >删除</el-button
        >
        <el-button @click="about(scope.row)" type="text" size="small">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['list'],
  methods: {
    del(id) {
    //   console.log(id);
      this.$emit('del', id);
    },
    about(item) {
      this.$emit('about', item);
    },
  },
};
</script>
