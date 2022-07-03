<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="showList" @del="delFn"></TodoMain>
    <TodoFooter :count="count" @change="changeFn" @clear="clearFn"></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import "./assets/styles/base.css"
import "./assets/styles/index.css"

import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";


export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 201, name: "睡觉", isDone: false },
        { id: 103, name: "打豆豆", isDone: true },
      ],
      getSel:'all'
    };
  },
  methods:{
    addFn(task){
      const id = this.list[this.list.length - 1] ? this.list[this.list.length - 1].id+1 : 100
      this.list.push({
        id,
        name:task,
        isDone:false
      })
    },
    delFn(id){
      const index = this.list.findIndex(ele => ele.id==id)
      this.list.splice(index,1)
    },
    changeFn(val){
      this.getSel=val
    },
    clearFn(){
      this.list = this.list.filter(ele => !ele.isDone)
    }
  },
  computed:{
    showList(){
      if(this.getSel=='no'){
        return this.list.filter(ele => !ele.isDone)
      }else if(this.getSel=='yes'){
        return this.list.filter(ele => ele.isDone)
      }else{
        return this.list
      }
    },
    count() {
      return this.showList.length
    }
  }
};
</script>