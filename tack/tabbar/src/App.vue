<template>
  <div id="app">
    <MyHeaderVue title="tabbar"></MyHeaderVue>
    <div style="margin-top: 45px">
      <template>
        <component :is="componentId"></component>
      </template>
    </div>
    <MyTabBar :list="tabList" @changeCom="changeComFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeaderVue from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'

export default {
  name: 'App',
  data() {
    return {
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
      componentId: 'MyGoodsList',
    }
  },
  methods: {
    changeComFn(cName) {
      console.log(cName)
      this.componentId = cName // MyTabBar里选出来的组件名赋予给is属性的comName
      // 导致组件的切换
    },
  },
  components: {
    MyHeaderVue,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
}
</script>

<style></style>
