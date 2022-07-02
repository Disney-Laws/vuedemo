<template>
  <div>
    购物车商品总价：
    <!-- 商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
    {{ totalPrice() }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      total: 5,
      price: 98,
      coupon: 400
    }
  },

  methods: {
    totalPrice () {
      return this.total * this.price >= 500 ? this.total * this.price - this.coupon : this.total * this.price
    }
  }
}
</script>
