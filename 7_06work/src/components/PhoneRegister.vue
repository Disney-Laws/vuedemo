<template>
   <div>
      手机号<br>
      <input type="text" placeholder="输入手机号">
      <br>
     <slot>
      验证码<br>
      <input type="text" placeholder="输入验证码"><button>发送验证码</button>
      <br>
      登陆密码：<br>
      <input type="password"/>
      <br>
      再次登陆密码
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

<style>

</style>