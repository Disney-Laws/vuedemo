<template>
  <div>
    <input 
    type="text" 
    placeholder="搜索-书本名称" 
    v-model.trim="search" 
    @keyup.enter="searchFn(search)"
    >
  </div>
</template>

<script>
export default {
    data() {
        return {
            search:'',
        }
    },
    methods:{
        searchFn(val) {
            this.$emit('search',val)
            this.search=''
        }
    }
}
</script>

<style>

</style>