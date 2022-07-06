<template>
  <div>
    <button @click="comName = 'ShouJi'">手机注册</button>
    <button @click="comName = 'YouXiang'">邮箱注册</button>
    <div>
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
    <br />
    <div><input type="text" /><button>发送验证码</button></div>
    <p></p>
    <input type="password" name="" id="" /><br />
    <input type="password" name="" id="" />
    <p></p>
    <input type="text" name="" id="" />
  </div>
</template>

<script>
import ShouJi from "../components/ShouJi.vue";
import YouXiang from "../components/YouXiang.vue";
export default {
  data() {
    return {
      comName: "ShouJi",
    };
  },
  components: {
    ShouJi,
    YouXiang,
  },
};
</script>
