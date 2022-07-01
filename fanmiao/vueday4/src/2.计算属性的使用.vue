<template>
  <!-- 计算属性的使用 -->
  <div>
    购物车商品总价：
    <!-- 商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
    <!-- {{ total * price >= 500 ? total * price - coupon : total * price }} -->
    <!-- 在模板中放入太多的逻辑，这样会导致 会让模板过重， 并且代码 很难以维护 -->
    {{totalPrice}}

    <div>
      <br>
      <span>姓:</span>
      <input v-model="name">
      <br>
      <span>名:</span>
      <input v-model="secName">
      <br>
      <span>姓名:</span>
      <input type="text" v-model="full">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      total: 5,// 商品数量
      price: 98,// 单价
      coupon: 400 ,// 优惠券,

      name:'',
      secName:'',

    }
  },
  computed:{
    totalPrice(){
      return this.total * this.price > 500 ? this.total * this.price - 400 : this.total * this.price
    },
    // 计算属性完整写法
    full:{
      set(val){
        // console.log(val);
        this.name = val.split('-')[0]
        this.secName = val.split('-')[1]
      },
      get(){
        return this.name ? this.name+'-'+this.secName : ''
      }
    }



  }

}
</script>
