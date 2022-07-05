<template>
  <input type="text" placeholder="搜索-图书名称" @keydown.enter="seach" v-model.trim="bookname">
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
            if(this.bookname=='') return alert('Please enter...')
            this.$axios({
                url:'/api/getbooks',
                params:{
                    bookname:this.bookname
                }
            }).then((res)=> {
                console.log(res.data.data.length);
                if(res.data.status !== 200 || res.data.data.length==0){
                    return alert('未查询到图书！')
                }
                this.$emit('seach',res.data.data)
                this.bookname=''
            })
        }
    }

}
</script>

<style>

</style>