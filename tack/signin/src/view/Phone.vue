<template>
  <div>
    <p>选择所在地区（实名认证主体所在地）</p>
    <input type="radio" class="input1" name="bd" />
    <label for="" class="input1" name="bd">中国大陆</label>
    <input type="radio" class="input2" name="bd" />
    <label for="" class="input2" name="bd">中国香港</label>
    <div class="left">
      <slot name="phone" :msg="msg"> 别看了默认就是没有东西 </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '手机号码',
    }
  },
}
</script>

<style scoped>
.input1 {
  top: -20px;
  position: relative;
  left: -50px;
}
.input2 {
  top: -20px;
  position: relative;
  left: 0px;
}
.left {
  text-align: left;
  top: -40px;
  position: relative;
}
.sj {
  top: -20px;
  position: relative;
  width: 250px;
  height: 30px;
}
</style>
