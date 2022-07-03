<template>
  <div>
    <!-- 无id时, 可以使用index(反正也是就地更新) -->
    <div
      v-for="(item,index) in arr" :key="index"

    >
      <input type="checkbox" v-model='current' :value='item'/>
      <span>{{item}}</span>
    </div>
    <p>你选中的元素, 累加的值和为: {{sum}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      current:[]
    };
  },
  computed: {
    sum() {
      return this.current.reduce((pre,curr)=>pre+=curr,0)
    }
  },
};
</script>

<style>
</style>