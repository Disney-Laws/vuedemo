<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 20:00:56
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 23:08:37
-->
<template>
  <div>
    <TodoHeader @enter="enterFn"></TodoHeader>
    <TodoMain
    :list="showlist"
    @delete="deleteFn"
    ></TodoMain>
    <TodoFooter 
    :num="num"
    @change="changeFn"
    @clear="clearFn"
    ></TodoFooter>
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
        { id: 101, name: "睡觉", isDone: false },
        { id: 102, name: "打豆豆", isDone: true },
      ],
      getSel:'all',
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
    },
    changeFn(checked){
      this.getSel=checked
    },
    clearFn(){
      this.list.forEach(ele=>ele.isDone=false)
    },
    enterFn(val){
      const id = this.list[this.list.length-1]?this.list[this.list.length-1].id+1:100
      this.list.push({
        id,
        name:val,
        isDone: false
      })
    }
  },
  computed:{
    num(){
     return this.list.filter(ele=>!ele.isDone).length
    },
    showlist(){
      if(this.getSel=='no'){
        return this.list.filter(ele=>!ele.isDone)
      }else if(this.getSel=='yes'){
        return this.list.filter(ele=>ele.isDone)
      }else{
        return this.list
      }
    }
  }
}
</script>

<style>

</style>