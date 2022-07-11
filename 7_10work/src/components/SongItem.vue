<template>
  <div>
    <van-cell
      :title="name"
      value="内容"
      size="large"
      :label="author + '-' + name"
      :id="id"
    >
      <van-icon color="#000" name="play-circle-o" size="28" @click="clickFn"/>
    </van-cell>
  </div>
</template>

<script>

export default {
  props: {
    name: String,
    id: Number,
    author: String,
  },
  methods: {
    clickFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style></style>
