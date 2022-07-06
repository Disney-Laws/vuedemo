<template>
  <div>
    <div>
      <span>人生格言:</span>
      <input type="text" />
    </div>
    <div>
      <span>个人简介:</span>
      <textarea></textarea>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log('01created---userinfo');
  },
  mounted() {
    console.log('01mounted--userinfo');
  },
  updated() {
    console.log('01updated--userinfo');
  },
  destroyed() {
    console.log('01destroyed--userinfo');
  },
  activated() {
    console.log('actived---userinfo');
  },
  deactivated() {
    console.log('deactivated--userinfo');
  },
};
</script>
