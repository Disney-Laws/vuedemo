<template>
  <div>
    <MyTable :list="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <!-- scope的值: {row: obj} -->
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
          class="tag-input form-control"
          style="width: 100px;"
          type="text"
          v-if="scope.row.inputVisible"
          v-focus
          @blur="scope.row.inputVisible = false"
          @keydown.enter="enterFn(scope.row)"
          v-model="scope.row.inputValue"
          @keydown.esc="scope.row.inputValue = ''"
          />
          <button 
          v-else 
          style="display: block;" 
          class="btn btn-primary btn-sm add-tag"
          @click="scope.row.inputVisible = true"
          >+Tag</button>

          <span v-for="(str, ind) in scope.row.tags" :key="ind"
          class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm"
          @click="removeBtn(scope.row.id)"
          >删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";

export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [] // 所有数据
    };
  },
  created() {
    axios({
      url: "/api/goods",
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    removeBtn(id){
      let index = this.list.findIndex(obj => obj.id === id)
      this.list.splice(index, 1)
    },
    enterFn(obj){ // 回车
      // console.log(obj.inputValue);
      if (obj.inputValue.trim().length === 0) {
        alert('请输入数据')
        return
      }

      obj.tags.push(obj.inputValue) // 表单里的字符.串状态t ags数组
      obj.inputValue = ""
    }
  }
};
</script>

<style>
</style>