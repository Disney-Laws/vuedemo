<template>
  
</template>



<script >


// <!-- 3. this 指向 -->
function fn() {
  console.log(this);
}

const obj = {
  name: "test",
  a() {
    console.log(this.a);
    setTimeout(function () {
      console.log(this.a);
    }, 1000);
  },
  b() {
    console.log(this);
    fn();
  },
};
obj.a();
obj.b();


export default {

}
</script>

<style>

</style>