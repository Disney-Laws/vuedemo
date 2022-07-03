<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model='allChoice'/>全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr  v-for="(item,index) in list" :key="index">
        <td><input type="checkbox" v-model="item.flag" /></td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
            <span @click="item.num>0 ? item.num-- : 0 ">-</span>
            <input 
            type="text" 
            v-model="item.num" 
            @blur="blur(item.num,item.id)" 
            @keyup.enter='blur(item.num,item.id)'/>
            <span @click="item.num++">+</span></td>
        <td>{{item.num*item.price}}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delChoice">删除选中商品</button>
    <button @click="list=[]">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>总件数：{{sumNum}}</p>
      <p>总价 {{sumPrice}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰",price:'100', num:'0',time: "2020-08-01" ,flag:false},
        { id: 2, name: "宝马",price:'200', num:'0',time: "2020-08-02" ,flag:false},
        { id: 3, name: "奥迪",price:'300', num:'0',time: "2020-08-03" ,flag:false},
      ],
    };
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
        if(confirm('是否删除')) {
            this.list=this.list.filter(item=>item.id!=index)
        }
    },
    blur(num,id) {
        if(num<0) {
            alert('不要输入空值')
            this.list[id-1].num=0
        }
    },
    delChoice(){
        this.list=this.list.filter(item => item.flag!==true)
    },
    // clearShopCar(){
    //     this.list.forEach(item => {
    //         item.num=0
    //     })
    // }
  },
  computed:{
    sumNum () {
        return this.list.reduce((pre,curr) => pre = pre + +curr.num,0)
    },
    sumPrice () {
        return this.list.reduce((pre,curr) => pre = pre + +curr.price*curr.num,0)
    },
    allChoice:{
        get(){
            let flag = ''
            if(this.list.length == 0) {
                flag = false
            }else {
                flag = this.list.every(item => item.flag===true)
            }
            return flag
            // return this.list.every(item => item.flag===true)
        },
        set(val) {
            this.list.forEach(item => {item.flag=val})
        }       
    }
    }
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
