<template>
  <div id="app">
    <ul>
      <li v-for="(item, ind) in arr" :key="item">
        <span>{{ item }}</span>
        <button @click="del(ind)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [5, 7, 1],
    };
  },
  methods: {
    add() {
      this.arr.push(Math.floor(Math.random() * 20));
    },
    del(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>

<style>
</style>






<!-- <template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <span>{{item}}</span>
        <button @click="del(index)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [5, 7, 1],
    };
  },
  methods: {
    add() {
      this.arr.push(Math.round(Math.random()*10))
    },
    del(id) {
      this.arr.splice(id,1)
    }
  },
};
</script>

<style>
</style> -->
