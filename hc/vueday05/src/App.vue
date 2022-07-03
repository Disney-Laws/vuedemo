<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 20:00:56
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 22:36:03
-->
<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoMain
    :list="list"
    @delete="deleteFn"
    ></TodoMain>
    <TodoFooter :num="num"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
    data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 201, name: "睡觉", isDone: false },
        { id: 103, name: "打豆豆", isDone: true },
      ],
    };
  },
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  methods:{
    deleteFn(id){
     const index = this.list.findIndex(ele=>ele.id == id);
     this.list.splice(index, 1);
    }
  },
  computed:{
    num(){
     return this.list.filter(ele=>!ele.isDone).length
    }
  }
}
</script>

<style>

</style>