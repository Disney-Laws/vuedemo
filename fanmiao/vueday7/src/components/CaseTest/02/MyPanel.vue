<template>
  <div>
    <!-- 按钮标题 -->
    <div class="title">
      <slot name="title"> <h4>芙蓉楼送辛渐</h4> </slot>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? '收起' : '展开' }}
      </span>
    </div>
    <!-- 下拉内容 -->
    <div class="container" v-show="isShow">
      <!-- 组件内使用slot占位 -->
      <!-- <slot> -->
      <!-- slot插槽内可以写默认显示内容 -->
      <!-- 默认内容 -->
      <!-- </slot> -->
      <!-- 具名插槽 -->
      <!-- <slot name="content">默认内容</slot> -->
      <!-- 作用域插槽 -->
      <!-- 自定义属性row和内变量test关联 -->
      <slot name="content" :row="test"></slot>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      test:{
        a:'作用域插槽组件变量'
      }
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}

.title h4 {
  line-height: 2;
  margin: 0;
}

.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}

.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}

img {
  width: 50%;
}
</style>
