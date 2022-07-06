<template>
  <div>
    <MyTableVue>
     <template #imgage="scoped">
        <img :src="scoped.img" alt="" style="width:80px">
     </template>
       <template #age="scoped">
        <input type="text" :value="scoped.ip">
     </template>
       <template #name="scoped">
       <p>{{scoped.nm}}</p>
     </template>
       <template #index="scoped">
       <span>{{scoped.ind}}</span>
     </template>
    </MyTableVue>
  </div>
</template>

<script>
import MyTableVue from '../view/MyTable.vue'
export default {
  components:{
    MyTableVue
  }
}
</script>