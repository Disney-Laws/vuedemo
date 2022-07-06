<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-06 18:02:49
 * @LastEditors: sj
 * @LastEditTime: 2022-07-06 20:20:23
-->
<template>
  <div id="box">
    <header>
      <div class="left" @click="activefn1" :class="{active:active1}">手机注册</div>
      <div class="right" @click="activefn2" :class="{active:active2}">邮箱注册</div>
    </header>
    <main>
     <keep-alive>
       <component :is="comName">
         <template v-slot:phone>
       <input type="text" placeholder="输入验证码">
      <br>
      登陆密码：<br>
      <input type="password"/>
      <br>
      <input type="password" placeholder="再次输入登陆密码"/>
      <br>
       邀请码：<br>
       <input type="text" placeholder="输入客户经理邀请码">
       <button>注册</button>
         </template>
       </component>
     </keep-alive>
    </main>
  </div>
</template>

<script>
import MyPhone from '../components/MyPhone.vue'
import MyEmail from '../components/MyEmail.vue'
export default {
  data(){
    return {
      active1: true,
      active2: false,
      comName: 'MyPhone',
    }
  },
  methods:{
    activefn1(){
      this.active1=true
      this.active2=false
      this.comName = 'MyPhone'
    },
        activefn2(){
      this.active1=false
      this.active2=true
      this.comName= 'MyEmail'
    }
  },
  components:{
    MyPhone,
    MyEmail
  }
}
</script>

<style scoped>
 #box {
  padding: 15px 30px;
 }
 header {
  display: flex;
  font-size: 28px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
 }
 .active {
  color: blue;
  border-bottom: 1px solid blue;
 }
</style>