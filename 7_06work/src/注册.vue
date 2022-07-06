<template>
  <div>
    <div class="header">
        <div @click="comName = 'MyPhone'">手机号注册</div>
        <div @click="comName = 'MyEmil'">邮箱注册</div>
    </div>
        <keep-alive>
          <component :is="comName"></component>
        </keep-alive>
    
  </div>
</template>

<script>
import MyPhone from './components/PhoneRegister.vue'
import MyEmil from './components/EMeilRegister.vue'
export default {
    components:{
        MyPhone,
        MyEmil
    },
    data() {
      return {
        comName:"MyPhone"
      }
    },
}
</script>

<style>
.header{
  display: flex;
  justify-content: space-around;
  font-size: 25px;
}
</style>