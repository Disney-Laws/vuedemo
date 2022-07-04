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
        seach(){
            this.$axios({
                url:'/api/getbooks',
                params:{
                    bookname:this.bookname
                }
            }).then((res)=> {
                console.log(res.data);
                this.$emit('seach',res.data.data)
            })
        }
    }

}
</script>

<style>

</style>