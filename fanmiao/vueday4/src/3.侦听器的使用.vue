<template>
  <div>
    <input type="text" v-model="name">
    <input type="text" v-model="user.name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      user:{
        name:''
      }
    }
  },
  // 目标: 侦听到name值的改变
  /*
  语法:
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
        // newVal 是改变之后的值
        // oldVal 是改变之前的值  
      }
    }
  */
  watch: {
    // newVal: 当前最新值
    // oldVal: 上一刻值
    name(newVal, oldVal) {
      console.log(newVal, oldVal);
    },

    // 深度侦听
    "user":{
      handler(newVal,oldVal){
        console.log('new',newVal);
        console.log('old',oldVal);
      },
      deep:true,//深度侦听
      immediate:true //立即侦听
    }

  }
}
</script>

<style>
</style>