<template>
  <div>
    <!-- 案例1 动态组件+组件缓存 -->
    <!-- <Dynamic></Dynamic> -->
    <!-- 案例2  组件插槽-->
    <Slot></Slot>
  </div>
</template>

<script>
import Dynamic from './CaseTest/01_UseDynamic.vue'
import Slot from './CaseTest/02_UseSlot.vue'
export default {
  components:{
    Dynamic,
    Slot,
  }

}
</script>

<style>

</style>