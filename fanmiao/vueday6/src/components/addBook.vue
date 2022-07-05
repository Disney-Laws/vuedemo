<template>
  <div>
    <el-input type="text" placeholder="书本" v-model.trim="bookname" />
    <br />
    <br />
    <el-input type="text" placeholder="作者" v-model.trim="author" />
    <br />
    <br />
    <el-input type="text" placeholder="出版社" v-model.trim="publisher" />
    <br />
    <br />
    <el-button id="addBtn" @click="addFn" :disabled="isShow">新增</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookname: '',
      author: '',
      publisher: '',
      isShow:false,
    };
  },
  methods: {
    addFn() {
      if (this.bookname=='' || this.author=='' || this.publisher=='') {
        return alert('Pleace enter...')
      }
      this.isShow=true
      const obj = {
        bookname: this.bookname,
        author: this.author,
        publisher: this.publisher,
      };
      this.$emit('add',obj)
      this.bookname='',
      this.author='',
      this.publisher=''
      // document.getElementById('addBtn').disabled=false
    },
  },
};
</script>

<style></style>
