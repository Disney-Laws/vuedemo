<template>
  <div>
    <div class="box">
      <div>
        <div class="left">
          <a href="" @click.prevent="isshow = 'PhoneVue'">手机注册</a>
        </div>
        <div class="left">
          <a href="" @click.prevent="isshow = 'MailboxVue'">邮箱注册</a>
        </div>
      </div>

      <div id="main">
        <keep-alive>
          <component :is="isshow">
            <template #phone="scoped">
              <p>{{ scoped.msg }}</p>
              <input
                class="sj"
                type="text"
                name=""
                id=""
                placeholder="请输入手机号码"
              />
            </template>
            <template #mailbox="scoped">
              <p>{{ scoped.data }}</p>
              <input
                class="sj"
                type="text"
                name=""
                id=""
                placeholder="请输入邮箱"
              />
            </template>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneVue from '../view/Phone.vue'
import MailboxVue from '../view/Mailbox.vue'

export default {
  data() {
    return {
      isshow: 'PhoneVue',
    }
  },
  components: {
    PhoneVue,
    MailboxVue,
  },
}
</script>

<style scoped>
.box {
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  height: 500px;
  width: 400px;
  background-color: rgb(218, 210, 210);
  margin: 20px auto;
  border-radius: 1%;
}
.box > div > div {
  line-height: 60px;
  text-align: center;
  height: 60px;
  float: left;
}
.box .left {
  width: 50%;
}
.box > div > div a {
  font-size: 20px;
  display: block;
  text-decoration: none;
  color: #000;
  font-weight: 700;
}
.box > div > div a:hover {
  color: blue;
  border-bottom: 2px solid blue;
}
</style>
