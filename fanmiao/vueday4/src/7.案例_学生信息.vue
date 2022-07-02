<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" placeholder="请输入姓名" v-model="name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" placeholder="请输入年龄" v-model="age"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn">{{isEdit ? '修改' : '添加'}}</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{{1:'男',0:'女'}[item.sex]}}</td>
          <td>
            <button @click="delFn(item.id)">删除</button>
            <button @click="editFn(item)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      // list:[
      //   {
      //     id:1,
      //     name:'Tom',
      //     age:19,
      //     sex:1,
      //   }
      // ],
      list: JSON.parse(localStorage.getItem('list')) || [],
      name:'',
      age:'',
      sex:0,
      isEdit:false,
      currentId:''
    }
  },
  methods:{
    addFn(){
      if(this.name=='' || this.age == ''){
        return alert('Please enter ...')
      }

      if(this.isEdit){
        const index = this.list.findIndex(ele => ele.id==this.currentId)

        // this.list[index].name=this.name
        // this.list[index].age=this.age
        // this.list[index].sex=this.sex
        const obj = {
          id:this.currentId,
          name:this.name,
          age:this.age,
          sex:this.sex
        }
        this.list.splice(index,1,obj)

        alert('修改成功！')
        this.isEdit=false

      }else{
        const id = this.list[this.list.length-1]? this.list[this.list.length-1].id+1 : 1
        const obj = {
          id,
          name:this.name,
          age:this.age,
          sex:this.sex
        }
        console.log(obj);
        console.log(this.list);
        this.list.push(obj)
        alert('添加成功！')
      }
      this.clearnFn()
    },
    delFn(val){
      const index = this.list.findIndex(ele => ele.id == val)
      this.list.splice(index,1)
    },
    editFn(item){

      this.name=item.name
      this.age=item.age
      this.sex=item.sex
      this.currentId=item.id

      this.isEdit=true

    },
    clearnFn(){
      this.name=''
      this.age=''
      this.sex=1
      this.currentId=''
    }
  },
  watch:{
    list:{
      handler(){
        localStorage.setItem('list',JSON.stringify(this.list))
      }
    },
    deep:true,
    immediate:true,
  }

}
</script>
