<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-01 20:00:26
 * @LastEditors: sj
 * @LastEditTime: 2022-07-01 20:00:26
-->
<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{item.name}}
        <button @click="buybook(item.name)">买它</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
       <tr v-for="(item , index) in arr" :key="index">
        <th>{{index+1}}</th>
        <th>{{item.name}}</th>
        <th>{{item.price}}</th>
        <th>{{item.count}}</th>
        <th>{{item.price*item.count}}</th>
      </tr>
    </table>
    <p>总价格为: {{allPrice}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
    };
  },
  methods:{
    buybook(val){
      const index = this.arr.findIndex(ele=>ele.name==val)
      this.arr[index].count++
    }
  },
  computed:{
    allPrice(){
      return this.arr.reduce((sum,val)=>sum+val.price*val.count,0)
    }
  }
};
</script>