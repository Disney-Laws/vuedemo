<template>
  <div>
    <!-- 案例1 动态组件+组件缓存 -->
    <!-- <Dynamic></Dynamic> -->
    <!-- 案例2  组件插槽-->
    <!-- <Slot></Slot> -->
    <!-- 案例3 作用域插槽使用场景 -->
    <!-- <MyTable></MyTable> -->

    <!-- 作业-手机注册邮箱注册 -->
    <!-- <MyRegister></MyRegister> -->
    <!-- 作业-数据渲染成表单 -->
    <MyTableVue></MyTableVue>

  </div>
</template>

<script>
import Dynamic from './CaseTest/01_UseDynamic.vue'
import Slot from './CaseTest/02_UseSlot.vue'
import MyTable from './CaseTest/03_UseTable.vue'
import MyRegister from './MyRegister.vue'
import MyTableVue from './MyTable.vue'
export default {
  components:{
    Dynamic,
    Slot,
    MyTable,
    MyRegister,
    MyTableVue,
  }

}
</script>

<style>

</style>