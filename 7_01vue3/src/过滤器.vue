<template>
  <div>
{{num1 | filter1}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            num1:1856561,
            num2:1636450540055
        }
    },
    filters:{
        filter1(val){
            return val.toFixed(4)
        }
    }
}
</script>

<style>

</style>