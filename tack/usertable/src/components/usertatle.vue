<template>
  <div>
    <MyTableVue>
      <template #imgage="scoped">
        <img
          v-if="scoped.type == 0"
          :src="scoped.img.headImgUrl"
          alt=""
          style="width: 80px"
        />
        <a v-else-if="scoped.type == 1" href="scoped.img.headImgUrl">{{
          scoped.img.headImgUrl
        }}</a>
        <div v-else>{{ scoped.img.headImgUrl }}</div>
      </template>
      <template #age="scoped">
        <input type="text" :value="scoped.ip" />
      </template>
      <template #name="scoped">
        <p>{{ scoped.nm }}</p>
      </template>
      <template #index="scoped">
        <span>{{ scoped.ind }}</span>
      </template>
    </MyTableVue>
  </div>
</template>

<script>
import MyTableVue from '../view/MyTable.vue'
export default {
  components: {
    MyTableVue,
  },
}
</script>
