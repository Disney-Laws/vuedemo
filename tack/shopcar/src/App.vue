<template>
  <div id="app">
    <MyHeaderVue
      title="购物车案例"
      background="#1d7bff"
      color="white"
    ></MyHeaderVue>
    <div style="margin-top: 45px">
      <MyGoodsVue v-for="item in list" :key="item.id" :gObj="item"></MyGoodsVue>
    </div>
    <MyFooterVue @changeAll="allFn"></MyFooterVue>
  </div>
</template>

<script>
import MyHeaderVue from './components/MyHeader.vue'
import MyGoodsVue from './components/MyGoods.vue'
import MyFooterVue from './components/MyFooter.vue'
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.$axios({
      url: '/api/cart',
    }).then((res) => {
      console.log(res.data.list)
      this.list = res.data.list
    })
  },
  name: 'App',
  components: {
    MyHeaderVue,
    MyGoodsVue,
    MyFooterVue,
  },
  methods: {
    allFn(val) {
      this.list.forEach((obj) => (obj.goods_state = val))
    },
  },
}
</script>

<style></style>
