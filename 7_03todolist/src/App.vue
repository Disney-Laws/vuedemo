<template>
  <div>
    <TodoHeader @add='addFn'/>
    <TodoMain :list='showList' @del='delFn' />
    <TodoFooter :leftover='leftover' @filterData='filterDataFn' @clear='clearFn'/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

export default {
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('todolist')) ||[],
      // [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 101, name: "睡觉", isDone: false },
      //   { id: 102, name: "打豆豆", isDone: true },
      // ],
      getSel:'all'
    }
  },
  methods:{
    addFn(val){
      // console.log(111);
      this.list.push({
        id: this.list.length == 0 ? 100 : this.list[this.list.length-1].id+1, 
        name: val, 
        isDone: false
      })
    },
    delFn(id){
      let index = this.list.findIndex(item => item.id == id)
      this.list.splice(index,1)
    },
    // leftover(){
    //   return this.list.reduce((pre,curr) => {
    //     if(curr.isDone==false) {
    //       pre++
    //     }
    //     return pre
    //   },0)
    // }
    filterDataFn(val){
      this.getSel=val
    },
    // showList(){
    //     if(this.getSel == 'no') {
    //       return this.list.filter(ele => !ele.isDone)
    //     }else if(this.getSel == 'yes') {
    //       return this.list.filter(ele => ele.isDone)
    //     }else return this.list
    //   }
    clearFn(){
      this.list.forEach(ele=>{ele.isDone=false})
    }
  },
    
  computed:{
    // leftover(){
    //   return this.list.reduce((pre,curr) => {
    //     if(curr.isDone == false) {
    //       pre++
    //     }
    //     return pre
    //   },0)
    // }
    leftover() {
      return this.list.filter((ele)=>!ele.isDone).length
    },
    showList(){
      if(this.getSel == 'no') {
        return this.list.filter(ele => !ele.isDone)
      }else if(this.getSel == 'yes') {
        return this.list.filter(ele => ele.isDone)
      }else return this.list

    }
  },
  watch:{
    list :{
      deep:true,
      handler(val){
        localStorage.setItem("todolist",JSON.stringify(val || []))
      }
    }
  }
}
</script>

<style>

</style>
