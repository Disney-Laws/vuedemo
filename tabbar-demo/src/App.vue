<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyTable></MyTable>
    <MyTabBar></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTable from "./components/MyTable.vue";
import MyTabBar from "./components/MyTabBar.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyTabBar,
    MyTable,
  },
};
</script>

<style></style>
