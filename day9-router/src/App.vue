<template>
  <div>
    <div class="footer_wrap">
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">       我的音乐</a>
      <a href="#/part">     朋友    </a> -->
      <!-- <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part/test/11">朋友</router-link> -->
      <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <span @click="btn('/part', 'Part')">朋友</span>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 目标: 声明式导航 - 激活类名区别
// 1. url上hash值(#/home/recommend) 包含 导航的href值(#/home) - 当前a就有 "router-link-active"  (模糊)
// 2. url上hash值(#/home/recommend) 等于 导航的href值(#/home/recommend) - 当前a就有"router-link-exact-active" (精确)
export default {
  methods: {
    btn(targetPath, targetName) {
      this.$router.push({
        // path: targetPath,
        name: targetName,
        query: {
          id: 1,
        },
      });
    },
  },
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
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}

/*激活时样式 */
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>
