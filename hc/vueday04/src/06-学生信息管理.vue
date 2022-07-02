<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-01 22:52:14
 * @LastEditors: sj
 * @LastEditTime: 2022-07-01 22:52:14
-->
<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" placeholder="请输入姓名" v-model="currentList.name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" placeholder="请输入年龄" v-model="currentList.age"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="currentList.sex">
        <option :value="1">男</option>
        <option :value="0">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn">{{this.eidtId? '修改':'添加'}}</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{{'0':'女','1':'男'}[item.sex]}}</td>
          <td>
            <button @click="delFn(item.id)">删除</button>
            <button @click="eidtFn(item)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[
        {
          id:100,
          name: 'zs',
          age: 20,
          sex: 0
        }
      ],
      currentList:{
        name:'',
        age:'',
        sex: 1
      },
      flag: false,
      eidtId:'',
    }
  },
  methods:{
    addFn(){
       if(this.flag){
         const index =this.list.findIndex(ele=>ele.id==this.eidtId)
         console.log(index);
         this.list[index].name=this.currentList.name
         this.list[index].age=this.currentList.age
         this.list[index].sex=this.currentList.sex
         this.flag =false
         this.eidtId=''
         this.clearFn()
         return
      }
      if(this.currentList.name == ''||this.currentList.age=='')return alert('请填写信息')
      const id = this.list[this.list.length-1]? this.list[this.list.length-1].id+1:100
      this.list.push({
        id,
        name:this.currentList.name,
        age:this.currentList.age,
        sex:this.currentList.sex,
      })
      this.clearFn()
    },
    eidtFn(val){
       this.flag = true
       this.currentList.name=val.name
       this.currentList.age=val.age
       this.currentList.sex=val.sex
       this.eidtId=val.id
    },
    clearFn(){
      this.currentList.name=''
      this.currentList.age=''
      this.currentList.sex=1
    },
    delFn(val){
      const index =this.list.findIndex(ele=>ele.id==val)
     this.list.splice(index,1)
    }
  }
  
}
</script>

