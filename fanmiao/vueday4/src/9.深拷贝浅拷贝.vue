<template>
  
</template>



<script >
// <!--  1.请补全JavaScript代码，要求实现对象参数的深拷贝并返回拷贝之后的新对象 -->

    const _completeDeepClone = (target, map = new Map()) => {
        for (const key in map) {
          // 获取对象中的属性
          var item = map[key];
          if (item instanceof Array) {
            // 判断是否为数组
            target[key] = [];
            _completeDeepClone(target[key], item);
          } else if (item instanceof Object) {
            // 判断是否为对象
            target[key] = {};
            _completeDeepClone(target[key], item);
          } else {
            // 判断是否为普通值
            target[key] = item;
          }
        }
      }
      const obj = {
        id: 1,
        name: "章三",
        msg: {
          age: 18,
          },
      };
      const o = {};
      _completeDeepClone(o, obj);
      obj.msg.age = 20;
      console.log(obj);
      console.log(o);   



export default {

}
</script>

<style>

</style>