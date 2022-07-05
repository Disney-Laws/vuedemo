<template>
  <input type="text" placeholder="搜索-图书名称" @keydown.enter="seach" v-model.trim="bookname" />
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

<style scoped>
input{
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 300px;

    -webkit-appearance: none;
    background-color: #FFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
</style>>

</style>