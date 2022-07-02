<template>
  <div>
    <p>国内网站：粉丝数量：{{ sum | toUp("万") }}</p>
    <p>外国网站：粉丝数量: {{ sum | toUp("千") }}</p>
    <p>时间：{{ time | totime("-") }}</p>
    <p>时间：{{ time | totime("/") }}</p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      sum: "1876986",
      time: 1636450540055,
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
    totime(val, str) {
      return moment(val).format(`YYYY${str}MM${str}DD`);
    },
  },
};
</script>

<style></style>
