<template>
  <input type="text" placeholder="搜索-图书名称" @keydown.enter="seach" v-model="bookname">
</template>

<script>
export default {
    data(){
        return{
            bookname:''
        }
    },
    methods:{

    }

}
</script>

<style>

</style>