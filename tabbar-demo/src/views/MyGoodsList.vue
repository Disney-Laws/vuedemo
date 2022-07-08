<template>
  <div>
    <MyTable :arr="list">
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
// 目标: 循环商品列表表格
// 1. 封装MyTable.vue 整体表格组件-一套标签和样式
// 2. axios请求数据
// 3. 传入MyTable组件里循环tr显示数据

// 目标: 展示tags标签
// 1. tags数组 - 某个td循环span使用文字
// 2. span设置bs的样式

// 目标: 删除数据
// 1. 删除按钮 - 点击事件
// 2. 作用域插槽把索引值关联出来了
// scope身上就有row和index
// 3. 删除中使用scope.index的索引值
// 4. 删除事件里删除数组里对应索引值的数据
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
  }
};
</script>