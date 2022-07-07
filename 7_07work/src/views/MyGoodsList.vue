<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-model.trim="scope.row.inputValue"
            @blur="scope.row.inputVisible = false"
            v-focus
            v-if="scope.row.inputVisible"
            @keyup.enter="enterFn(scope.row)"
            @keyup.esc="scope.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            style="margin-right: 8px"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            删除
          </button>
          <button
            class="btn btn-danger btn-sm"
            style="background-color: skyblue; border: 0px"
            v-if="flag"
            v-showshow
            :id="scope.row.id"
          >
            编辑
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      this.list = res.data.data;
      // console.log(res.data.data);
    });
  },
  data() {
    return {
      list: [],
      flag:true
    };
  },
  components: {
    MyTable,
  },
  methods: {
    delFn(id) {
      let index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      if (obj.inputValue == "") return alert("请不要输入空值");
      obj.tags.push(obj.inputValue);
      obj.inputValue = "";
    },
  },
};
</script>

<style></style>
