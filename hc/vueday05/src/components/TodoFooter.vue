<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 21:34:08
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 22:46:08
-->
<template>
  <footer class="footer">
    <span class="todo-count">剩余 <strong>{{num}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected: isSel=='all'}" href="javascript:;" @click="change('all')">全部</a>
      </li>
      <li>
        <a :class="{selected: isSel=='no'}" href="javascript:;" @click="change('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected: isSel=='yes'}" href="javascript:;" @click="change('yes')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" >清除已完成</button>
  </footer>
</template>

<script>
export default {
  data(){
    return {
     isSel: 'all'
    }
  },
  props:['num'],
  methods:{
    change(checked){
      this.isSel=checked
      this.$emit('change',checked)
    }
  }

}
</script>