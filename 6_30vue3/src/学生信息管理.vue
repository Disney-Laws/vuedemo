<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input 
      type="text" 
      v-model.trim='name'
      placeholder="请输入姓名"
      />

    </div>
    <div>
      <span>年龄:</span>
      <input 
      type="number"
      v-model='age'
      />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="from">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addGai">添加/修改</button>
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
        <tr v-for="(item,index) in arr" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr:[
        {id:1,name:"呱呱太",age:18,sex:'男'},
        {id:2,name:"呱呱太二号",age:18,sex:'男'},
        {id:3,name:"呱呱太三号",age:18,sex:'男'}
      ],
      name:'',
      age:0,
      from:'',
      flag:false,
      editId:0
    }
  },
  methods:{
    addGai() {
      //
      if(this.flag===false) {
        if(this.name === ''||this.age==="") {
          alert('不要为空值')
          return
        } else {
          this.arr.push({
        id:this.arr.length ? this.arr[this.arr.length-1].id+1 : 1,
        name:this.name,
        age:this.age,
        sex:this.from,
        })
        this.name=''
        this.age=0
        this.from=''
        }
      }else{
        this.arr[this.editId].id=this.editId+1
        this.arr[this.editId].name=this.name
        this.arr[this.editId].age=this.age
        this.arr[this.editId].sex=this.from,
        this.name=''
        this.age=0
        this.from=''
        this.flag=false
      }

    },
    del(id) {
      let index = this.arr.findIndex(ele =>ele.id-1===id)
      this.arr.splice(index,1)
    },
    edit(id) {
      this.flag=true
      if(this.flag){
        let index = this.arr.findIndex(ele =>ele.id-1===id)
        this.name=this.arr[index].name
        this.age=this.arr[index].age
        this.from=this.arr[index].sex
        this.editId=id
      }
    }
  }
}
</script>
