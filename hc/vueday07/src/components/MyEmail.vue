<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-06 18:06:20
 * @LastEditors: sj
 * @LastEditTime: 2022-07-06 20:16:25
-->
<template>
  <div>
       邮箱：<br>
      <input type="email" placeholder="输入邮箱">
      <br>
     <slot name="email">
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