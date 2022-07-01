<template>
  <div>
    <!-- 2.过滤器的使用
      1. 在插值表达式 和  v-bind的表达式里可以用
      {{ message | 过滤器的名称 }}

      实现一个把所有字母转换成大写的过滤器
     -->
     <div>
      <h1>{{msg}}</h1>
      <!-- 
      定义局部过滤器toup 
      全局过滤器reverse 
      同时使用多个过滤器
      给过滤器传参
      -->
      <h2>{{msg | toup | reverse('*')}}</h2>
     </div>

  </div>
</template>

<script>
export default {
  // 过滤器的使用步骤
  // 1. 注册
  // 1.1 局部注册
  // filters: {
  //   过滤器的名称 (val) {
  //     return 处理后的值
  //   }
  // },
  // 只在当前的.vue文件里生效
  data() {
    return {
      msg:'abCDEfghigk'
    };
  },
  // 局部过滤器
  filters:{
    toup(val){
      return val.toUpperCase()
    }
  }
};
</script>