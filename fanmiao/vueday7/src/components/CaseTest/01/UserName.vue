<template>
  <div>
    <div>
      <span>用户名:</span>
      <input type="text" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('01created---userName');
  },
  mounted() {
    console.log('01mounted--userName');
  },
  updated() {
    console.log('01updated--userName');
  },
  destroyed() {
    console.log('01destroyed--userName');
  },
  activated() {
    console.log('actived---userName');
  },
  deactivated() {
    console.log('deactivated--userName');
  },
};
</script>
