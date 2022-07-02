<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll"/>全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.c" /></td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
          <span @click="item.count>1 ? item.count-- : 1"> - </span>
          <input :style='{ textAlign:"center" }' type="text" :value="item.count" @change="change(item,$event)" />
          <span @click="item.count++"> + </span>
        </td>
        <td>小记</td>
        <td><button @click="delFn(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delCheck">删除选中商品</button>
    <button @click="clearFn">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数 {{totalNum}}</p>
      <p>总价 {{totalPrice}}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", price: 1, count:1, c:false, },
        { id: 2, name: "宝马", price: 2, count:1, c:false, },
        { id: 3, name: "奥迪", price: 3, count:1, c:false, },
      ],
    };
  },
  methods: {
    delFn(val) {
      // 删除按钮 - 得到索引, 删除数组里元素
      const index = this.list.findIndex( ele =>  ele.id == val )
      this.list.splice(index, 1);
    },
    change(item,e){
      // console.log(item.count, isNaN(e.target.value));
      const index = this.list.findIndex(ele => ele.id == item.id)
      if (+e.target.value <= 1 || isNaN(e.target.value)){
        // item.count = 1
        e.target.value = 1
      }
      // item.count = item.count > 1 ? item.count : 1
      this.$set(this.list[index],'count',+e.target.value)
    },
    delCheck(){
      this.list = this.list.filter(ele => ele.c==false)
    },
    clearFn(){
      this.list = []

    },
  },
  computed:{
    // 已经选中商品件数
    totalNum(){
      return this.list.reduce((sum, next) => sum + next.count, 0)
    },
    // 总价
    totalPrice(){
      return this.list.reduce((sum,next)=> sum+next.price*next.count,0)
    },
    isAll:{
      set(val){
        this.list.forEach(ele => ele.c = val)
      },
      get(){
        return this.list.every(ele => ele.c == true)
      }
    }
  },


};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
