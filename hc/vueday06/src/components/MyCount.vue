<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 19:57:37
 * @LastEditors: sj
 * @LastEditTime: 2022-07-04 22:12:58
-->
<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="change">-</button>
    <input type="number" class="form-control inp" v-model.number="goods.goods_count">
    <button type="button" class="btn btn-light" @click="goods.goods_count++">+</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
    
    }
  },
  props:{
    goods:{
      type:Object,
      default: ()=>{return {}}
    }
  },
  methods:{
    change(){
       if(this.goods.goods_count<=1)return this.goods.goods_count=1
      this.goods.goods_count--
    },

  },
  watch:{
    goods:{
      handler(){
        if(this.goods.goods_count<=1)
         this.goods.goods_count=1
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn, .inp{
    transform: scale(0.9);
  }
}
</style>