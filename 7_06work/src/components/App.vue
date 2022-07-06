<template>
  <div>
    <MyTable>
      <template v-slot:idcast="scope">
        {{ scope.row.id }}
      </template>
      <template v-slot:title="scope">
        {{ scope.row.name }}
      </template>
      <template v-slot:age="scope">
        {{ scope.row.age }}
      </template>
      <template v-slot:img="scope">
        <img :src="scope.row.headImgUrl" alt="" />
        <a :href="scope.row.headImgUrl">a标签点击</a>
        {{ scope.row.headImgUrl }}
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue';
export default {
  components: {
    MyTable,
  },
};
</script>

<style></style>
