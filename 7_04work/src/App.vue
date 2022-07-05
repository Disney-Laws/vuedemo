<template>
  <div>
    <!-- <input 
    type="text" 
    placeholder="搜索-书本名称" 
    v-model.trim="search" 
    @keyup.enter="searchFn(search)"
    > -->
    <MyHeader @search='searchFn'/>
    <table class="table table-bordered table-hover mt-2">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.bookname}}</td>
          <td>{{item.author}}</td>
          <td>{{item.publisher}}</td>
          <td><button @click="delFn(item.id)">删除</button>-<button @click="detailsFn(item.id)">详情</button></td>
        </tr>
      </tbody>
    </table>
    <div id="box">
      <div>
        <div class="title">添加</div>
        <input type="text" placeholder="书名" class="addInput" v-model.trim="bookObj.bookname"><br>
        <input type="text" placeholder="作者" class="addInput" v-model.trim="bookObj.author"><br>
        <input type="text" placeholder="出版社" class="addInput" v-model.trim="bookObj.publisher"><br>
        <button id="add" @click="addFn">新增</button>
      </div>
      <div :class="{detail : flag}">
        <div class="title">详情</div>
        <input type="text" placeholder="书名" class="addInput" v-model.trim="detailsBookName"><br>
        <input type="text" placeholder="作者" class="addInput" v-model.trim="detailsAuthor"><br>
        <input type="text" placeholder="出版社" class="addInput" v-model.trim="detailsPublisher"><br>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import MyHeader from './components/MyHeader';
export default {
  components:{
    MyHeader
    },
  data() {
    return {
      list:{},
      search:'',
      bookObj:{
        bookname:'',
        author:'',
        publisher:'',
      },
      flag:true,
      detailsBookName:'',
      detailsAuthor:'',
      detailsPublisher:''
    }
  },
  created() {
    this.get()
  },
  methods:{
    get() {
      this.$axios({
        url:'/api/getbooks'
      }).then(res => {
        this.list=res.data.data
        // console.log(res.data.data);
        console.log('页面渲染');
      })
    },

    searchFn (bookName) {
      if(bookName=='')return alert('请输入查询书名')
      this.$axios({
        url:'/api/getbooks',
        params:{
          bookname:bookName
        }
      }).then(res => {
        if(res.data.data.length ==0) return alert('没有找到')
        this.list=res.data.data 
        // console.dir(res.data.data );
      })
    },
    addFn(){
      if(this.bookObj.bookname=='' || this.bookObj.author=='' || this.bookObj.publisher=='')return alert('请不要输入空值')
      this.$axios({
      url:'/api/addbook',
      method:'post',
      data:{
        ...this.bookObj
      }
    }).then(res => {
      // alert(res.data.msg)
      // this.list=res.data.data
      this.list=''
      this.get()
      this.bookObj.bookname=''
      this.bookObj.author=''
      this.bookObj.publisher=''
      alert('添加数据成功')
    })
    },
    detailsFn(id){
      // console.log(id);
      this.flag=false
      let obj = this.list.filter(ele => ele.id==id)
      console.dir(obj);
      this.detailsBookName=obj[0].bookname
      this.detailsAuthor=obj[0].author
      this.detailsPublisher=obj[0].publisher
    },
    delFn(id){
      this.$axios({
        url:'/api/delbook',
        params:{
          id
        }
      }).then(res => {
        this.get()
        alert('删除成功')
      })
      }
  }
}
</script>

<style>
#add {
  margin: 10px;
  background-color: rgb(0, 191, 255);
  border: 0;
}

.addInput{
  margin: 10px;
}

#box {
  display: flex;
  justify-content: space-around;
}

.title{
  margin-left: 80px;
}

.detail{
  display: none;
}
</style>