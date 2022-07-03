<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-03 21:33:56
 * @LastEditors: sj
 * @LastEditTime: 2022-07-03 22:35:33
-->
<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed: item.isDone}" v-for="item in list" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone"/>
        <label>{{item.name}}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:{
    list:{
      type:Array,
      default: ()=>[]
    }
  },
  methods:{
    del(id){
     this.$emit('delete', id)
    }
  }
}
</script>