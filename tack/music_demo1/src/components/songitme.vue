<template>
  <div>
    <van-cell :label="`${author}-${name}`" :title="name" :key="id">
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" @click="playFn" />
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    author: String,
    id: Number,
  },
  methods: {
    playFn() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id,
        },
      })
    },
  },
}
</script>
<style scoped>
.van-cell__label {
  width: 300px;
}
</style>
