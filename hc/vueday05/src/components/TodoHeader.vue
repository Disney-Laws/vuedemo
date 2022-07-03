<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 21:33:45
 * @LastEditors: sj
 * @LastEditTime: 2022-07-04 00:36:54
-->
<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label> 
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keydown.enter="enter"
    />
  </header>
</template>

<script>
export default {
 data(){
  return {
    task:'',
  }
 },
 methods:{
  enter(){
     if( this.task.length == 0 ) return alert('please enter')
    this.$emit('enter',this.task)
    this.task =''
  }
 },
 computed:{
  isAll:{
    get(){
      return this.$parent.list.every(ele=>ele.isDone)
    },
    set(val){
      this.$emit('checkbox',val)
      // this.$parent.list.forEach(ele=>ele.isDone=val)
    }
  }
 }
}
</script>