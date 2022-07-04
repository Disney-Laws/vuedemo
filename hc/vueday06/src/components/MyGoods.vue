<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 19:57:25
 * @LastEditors: sj
 * @LastEditTime: 2022-07-04 22:09:53
-->
<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :id="goods.id"
        v-model="goods.goods_state"
        >
        <label class="custom-control-label" :for="goods.id">
          <img :src="goods.goods_img" alt="">
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{goods.goods_name}}</div>
      <div class="bottom">
        <span class="price">¥ {{goods.goods_price}}</span>
        <span>
            <MyCount :goods="goods"></MyCount>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MyCount from './MyCount.vue'
export default {
 components:{
  MyCount,
 },
 props:{
  goods:{
    type:Object,
    default: ()=>{return {}}
  }
 },
//  methods:{
//   addFn(){
//     this.goods.goods_count++
//   },
//   subFn(){
//     if(this.goods.goods_count<=1)return this.goods.goods_count=1
//      this.goods.goods_count--
//   },

//  }
}
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top{
        font-size: 14px;
        font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}

</style>