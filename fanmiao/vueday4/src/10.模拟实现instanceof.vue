<template>
  
</template>



<script >

// <!-- 2. 模拟实现instanceof -->
function instance_of(L, R) { // L 表示左表达式，R 表示右表达式
  const O = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === null) { // Object.prototype 为 null
      return false
    }
    if (O === L) { // 当 O 严格等于 L 时，返回 true 
      return true
    }
    L = L.__proto__
  }
}
console.log(instance_of(Object, Object));
console.log(instance_of(Object, Function));
console.log(instance_of(String, String));



export default {

}
</script>

<style>

</style>