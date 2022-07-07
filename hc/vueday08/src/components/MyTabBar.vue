<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-07 19:28:12
 * @LastEditors: sj
 * @LastEditTime: 2022-07-07 19:57:23
-->
<template>
  <div class="my-tab-bar">
  	<div 
    class="tab-item"
    v-for="(item, index) in arr" :key="index"
    :class="{current: currentIndex==index}"
    @click="clickFn(index,item.componentName)"
    >
      <!-- 图标 -->
      <span 
      class="iconfont"
      :class="item.iconText"
      ></span>
      <!-- 文字 -->
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    arr:{
      type:Array,
      validator(val){
           // val  接收到到的list
        if(val.length>=2&&val.length<=5){
          return true
        }else{
          return false
        }
      }
    }
  },
  methods:{
    clickFn(index,name){
      this.currentIndex=index
      this.$emit('change', name)
    }
    
  }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
    
.current {
  color: #1d7bff;
}
</style>