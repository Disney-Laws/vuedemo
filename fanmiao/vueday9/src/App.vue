<template>
  <div>
    <div class="footer_wrap">
      <a  @click="btn('/find','Find')">发现音乐</a>
      <a  @click="btn('/my','My')">我的音乐</a>
      <a  @click="btn('/part','Part')">朋友</a>
      <!-- 声明式导航 -->
      <!-- <router-link to="/find">发现音乐</router-link>
      跳转传参
      <router-link to="/my/222">我的音乐</router-link>
      <router-link to="/part?name=aaa">朋友</router-link> -->

    </div>
    <div class="top">
      <!-- 7、设置挂载点 -->
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    btn(path,name){
      this.$router.push({
        path,
        // name,
        query:{
          name:"aaa"
        },
        params:{
          username:'abc'
        }
      })
    }
  }


};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.footer_wrap .router-link-active{
  color: white;
  background: black;
}
</style>