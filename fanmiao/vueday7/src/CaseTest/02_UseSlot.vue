<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
        <Panel>
          <img src="../assets/mm.gif" alt="">
          <span>我是内容</span>
      </Panel>
      <Panel>
        <!-- Panel组件内传入标签替换子组件的slot -->
          <p>寒雨连江夜入吴,</p>
          <p>平明送客楚山孤。</p>
          <p>洛阳亲友如相问，</p>
          <p>一片冰心在玉壶。</p>
      </Panel>
      <Panel>
        <!-- 具名插槽 -->
        <!-- v-slot跟template标签使用 -->
        <template v-slot:title></template>
        <template v-slot:content></template>
      </Panel>
      <Panel>
        <!-- 具名插槽 -->
        <!-- v-slot跟template标签使用 -->
        <template #title><h4>v-slot简写#</h4></template>
        <template #content></template>
        <!-- 作用域插槽 -->
      </Panel>
      <Panel>
        <!-- 作用域插槽 -->
        <template #title><h4>作用域插槽</h4></template>
        <!-- v-slot='变量名'  scope会收集slot身上属性和值形成对象 -->
        <template #content="scope">{{scope.row.a}}</template>
      </Panel>
    </div>
  </div>
</template>

<script>
import Panel from '../components/CaseTest/02/MyPanel.vue'
export default {
  components: {
    Panel,
  },
};
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>