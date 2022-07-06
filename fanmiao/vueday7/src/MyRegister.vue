<template>
  <div id="register">
    <el-button  @click="comName='iPhoneRegister'">手机注册</el-button>
    <el-button  @click="comName='EmailRegister'">邮箱注册</el-button>
    <keep-alive>
        <!-- 动态组件 -->
        <component :is="comName">
        <template v-slot:num="scope">
        <el-input v-model="scope.row.num" placeholder="输入手机号"></el-input>
        </template>
        <template v-slot:email="scope">
        <el-input v-model="scope.row.email" placeholder="输入邮箱"></el-input>
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
        type:'primary'
    };
  },
  methods: {},
};
</script>

<style>

#register{
    width: 500px;
}
html,body{
  text-align: center;
}
</style>
