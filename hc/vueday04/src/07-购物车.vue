<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-01 17:45:37
 * @LastEditors: sj
 * @LastEditTime: 2022-07-02 15:30:24
-->
<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.c" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="subFn(item.id)">-</span
          ><input
            type="text"
            v-model.number="item.count"
            style="text-align: center"
            @blur="blurFn(item.count,item.id)"
            @keyup.enter="blurFn(item.count,item.id)">
          <span @click="addFn(item.id)">+</span>
        </td>
        <td>{{ item.price * item.count }}</td>
        <td><button @click="delFn(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="deleteFn">删除选中商品</button>
    <button @click="AllDel">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数 {{allCount}}</p>
      <p>总价{{ allPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: '奔驰', price: 19, count: 1, c: false },
        { id: 2, name: '宝马', price: 20, count: 1, c: false },
        { id: 3, name: '奥迪', price: 99, count: 1, c: false },
      ],
    }
  },
  computed: {
    isAll: {
      set(val) {
        this.list.forEach((ele) => (ele.c = val))
      },
      get() {
        return this.list.every((ele) => ele.c == true)
      },
    },
    allCount(){
      return this.list.reduce((sum,next)=>sum + next.count,0)
    },
    allPrice(){
       return this.list.reduce((sum,next)=>sum + next.count*next.price,0)
    }
  },
  methods: {
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id)
      this.list.splice(index, 1)
    },
    addFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id)
      this.list[index].count++
    },
    subFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id)
      if (this.list[index].count == 1) return (this.list[index].count = 1)
      this.list[index].count--
    },
   deleteFn(){
   const arr= this.list.filter(ele=>ele.c==false)
    this.list=arr
   },
   AllDel(){
    this.list=[]
   },
   blurFn(val,id){
      const index = this.list.findIndex((ele) => ele.id == id)
     val>0?val:this.list[index].count=1 
   }

  },
}
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
