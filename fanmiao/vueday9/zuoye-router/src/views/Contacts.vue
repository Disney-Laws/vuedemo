<template>
  <div>
    <ul>
      <li>ALL_contacts</li>
      <li>ALice</li>
      <li>Bob</li>
    </ul>
    <button @click="btn">随机显示</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return{
        arr:['/contacts/all','/contacts/alice','/contacts/bob']
    }
  },
  methods: {
    btn() {
    //   console.log(Math.floor(Math.random() * this.arr.length));
    const path = this.arr[Math.floor(Math.random() * this.arr.length)]
    this.$router.push({
        path,
    })

    },
  },
};
</script>

<style></style>
