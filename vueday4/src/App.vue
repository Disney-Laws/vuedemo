<template>
  <div>
    <p>国内网站：粉丝数量：{{ sum | toUp("万") }}</p>
    <p>外国网站：粉丝数量: {{ sum | toUp("千") }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: "1876986",
    };
  },
  filters: {
    toUp(sum, val) {
      if (val == "万") {
        return sum.slice(0, 3) + "," + sum.slice(-4) + "万";
      }
      if (val == "千") {
        return sum.slice(0, 4) + "," + sum.slice(-3) + "千";
      }
    },
  },
};
</script>

<style></style>
