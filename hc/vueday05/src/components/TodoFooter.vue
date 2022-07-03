<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 21:34:08
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 22:39:51
-->
<template>
  <footer class="footer">
    <span class="todo-count">剩余 <strong>{{num}}</strong></span>
    <ul class="filters">
      <li>
        <a class="selected" href="javascript:;" >全部</a>
      </li>
      <li>
        <a href="javascript:;">未完成</a>
      </li>
      <li>
        <a href="javascript:;" >已完成</a>
      </li>
    </ul>
    <button class="clear-completed" >清除已完成</button>
  </footer>
</template>

<script>
export default {
  data(){
    return {
    
    }
  },
  props:['num']

}
</script>