<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-09 19:43:10
 * @LastEditors: sj
 * @LastEditTime: 2022-07-09 20:25:38
-->
<template>
  <div class="my-tab-bar">
  	<div 
    @click="clickFn(index,item.componentName)"
    :class="{current: currentIndex==index}"
    class="tab-item" 
    v-for="(item , index) in list" :key="index">
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
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
   props:['list'],
   methods:{
    clickFn(index,name){
     this.currentIndex=index
      switch(name){
        case 'MyGoodsList':
          this.$router.push('/mygoodsList')
          break
         case 'MyGoodsSearch':
          this.$router.push('/mygoodssearch')
          break
        case 'MyUserInfo':
          this.$router.push('/myuserinfo')
          break
      }
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