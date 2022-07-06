<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-06 18:05:59
 * @LastEditors: sj
 * @LastEditTime: 2022-07-06 20:18:49
-->
<template>
  <div>
     手机号：<br>
      <input type="text" placeholder="输入手机号">
      <br>
     <slot name="phone">
       <!-- <input type="text" placeholder="输入验证码">
      <br>
      登陆密码：<br>
      <input type="password"/>
      <br>
      <input type="password" placeholder="再次输入登陆密码"/>
      <br>
       邀请码：<br>
       <input type="text" placeholder="输入客户经理邀请码">
       <button>注册</button> -->
     </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 input {
  width: 85%;
  height: 35px;
  margin: 15px 0;
 }
</style>