<template>
  <div id="register">
    <el-button type="primary" @click="comName='iPhoneRegister'">手机注册</el-button>
    <el-button @click="comName='EmailRegister'">邮箱注册</el-button>
    <keep-alive>
        <!-- 动态组件 -->
        <component :is="comName">
        <template v-slot:num="scope">
        <el-input v-model="scope.row.num"></el-input>
        </template>
        </component>
    </keep-alive>


  </div>
</template>

<script>
import iPhoneRegister from './components/Register/iPhoneRegister.vue';
import EmailRegister from './components/Register/EmailRegister.vue';
export default {
  components: {
    iPhoneRegister,
    EmailRegister,
  },
  data() {
    return {
        comName:'iPhoneRegister',
    };
  },
  methods: {},
};
</script>

<style>

#register{
    width: 500px;
}
</style>
