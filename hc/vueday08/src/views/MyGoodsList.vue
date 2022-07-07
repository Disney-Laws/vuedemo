<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-07 19:28:56
 * @LastEditors: sj
 * @LastEditTime: 2022-07-07 21:11:39
-->
<template>
  <div>
    <MyTable :list="list">
      <template #header>
          <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{scope.row.id}}</td>
        <td>{{scope.row.goods_name}}</td>
        <td>{{scope.row.goods_price}}</td>
        <td>
          <input
          class="tag-input form-control"
          style="width: 100px;"
          type="text"
          v-focus
          v-model="scope.row.inputValue"
          v-if="scope.row.inputVisible"
          @blur="scope.row.inputVisible = false"
          @keydown.enter="enterFn(scope.row)"
          @keydown.esc="scope.row.inputValue = ''"
          />
              <button 
          v-else 
          style="display: block;" 
          class="btn btn-primary btn-sm add-tag"
          @click="scope.row.inputVisible = true"
          >+Tag</button>
             <span
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            style="margin-left: 10px"
            >{{ item }}</span
          >
        </td>
        <td>
          <button 
          class="btn btn-danger btn-sm"
          @click="del(scope.row)"
          >删除</button>
          <button class="btn btn-primary btn-sm" v-edit="user">编辑</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
  components:{
    MyTable
  },
  data(){
    return {
      list:[],
      person:['zs','ls'],
      user:'zs'
    }
  },
  directives:{
    edit:{
      inserted(el,binding,vnode){
        // console.log(binding.value);
        console.log(vnode.context);
        if(vnode.context.person.includes(binding.value)){
          el.style.display = 'block';
        }else{
          el.style.display = 'none';
        }
         
      }
    }
  },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      this.$axios({
        url:"/api/goods"
      }).then(res=>{
        console.log(res.data.data);
        this.list = res.data.data})
    },
    del(id){
       const index = this.list.findIndex(ele=>ele.id==id);
       this.list.splice(index, 1);
    },
    enterFn(obj){
      if(obj.inputValue.trim()==''){
         alert('请输入数据')
        return
      }
      obj.tags.push(obj.inputValue)
      obj.inputValue=''
      obj.inputVisible = false
    }
  }
}
</script>

<style>

</style>