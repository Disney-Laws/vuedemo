<template>
  <div>
    <TodoHeader @add="addFn" ></TodoHeader>
    <TodoMain :list="showlist" @del="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @filiterdata="filiterdataFn"
      @clear="clearFun"
    ></TodoFooter>
  </div>
</template>
 
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("todoList")) || [],
      // list: [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 101, name: "睡觉", isDone: false },
      // ],
      getSel: "all",
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        name: val,
        isDone: false,
        id,
      });
    },
    clearFun() {
      // 清除已完成
      // this.list = this.list.filter((obj) => obj.isDone == false);
      this.list.forEach((ele) => (ele.isDone = false));
    },
    delFn(id) {
      // 删除任务
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    filiterdataFn(val) {
      this.getSel = val;
    },
  },
  computed: {
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    showlist() {
      if (this.getSel == "no") {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.getSel == "yes") {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem("todoList", JSON.stringify(val || []));
      },
    },
  },
};
</script>
