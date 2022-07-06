<template>
  <div>
    <div class="left">
      <slot name="mailbox" :data="data"> 别看了默认就是没有东西 </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '邮箱',
    }
  },
}
</script>

<style scoped>

.left {
  text-align: left;
  position: relative;
}
.sj {
  top: -20px;
  position: relative;
  width: 250px;
  height: 30px;
}
</style>
