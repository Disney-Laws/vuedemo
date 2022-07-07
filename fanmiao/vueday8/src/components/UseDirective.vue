<template>
  <div>
    <p>局部-获取焦点</p>
    <input type="text" v-focus />
    <p>全局-获取焦点</p>
    <input type="text" v-gfocus />

    <p v-color="colorStr">自定义指令-传值</p>
    <p v-change="colorStr" @click="colorStr = 'green'">
      点击更改文字颜色为绿色
    </p>

    <p>处理输入框文本为数字</p>
    <input v-number="val" v-model="val" />{{ val }}
  </div>
</template>

<script>
// 目标: 创建 "自定义指令", 让输入框自动聚焦
// 1. 创建自定义指令
// 全局 / 局部
// 2. 在标签上使用自定义指令  v-指令名
// 注意:
// inserted方法 - 指令所在标签, 被插入到网页上触发(一次)
// update方法 - 指令对应数据/标签更新时, 此方法执行
export default {
  data() {
    return {
      colorStr: 'pink',
      val: '',
    };
  },

  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    color: {
      inserted(el, binding) {
        el.style.color = binding.value;
      },
    },
    change: {
      inserted(el, binding) {
        el.style.color = binding.value;
      },
      update(el, binding) {
        el.style.color = binding.value;
        // console.log(binding);
      },
    },
    number: {
      inserted(el, binding, vnode) {
        // el.value=el.value.replace(/[\D.]/g,'')
        vnode.context[binding.expression] = el.value.replace(/[\D+]/g, '');
      },
      update(el, binding, vnode) {
        // el.value=el.value.replace(/[\D+]/g,'')
        // console.log(el.value);
        vnode.context[binding.expression] = el.value.replace(/[\D+]/g, '');
      },
    },
  },
  methods: {},
};
</script>

<style></style>
