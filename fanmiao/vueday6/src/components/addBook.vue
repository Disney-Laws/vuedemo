<template>
  <div>
    <input type="text" placeholder="书本" v-model="bookname" />
    <br />
    <br />
    <input type="text" placeholder="作者" v-model="author" />
    <br />
    <br />
    <input type="text" placeholder="出版社" v-model="publisher" />
    <br />
    <br />
    <button id="addBtn" @click="addFn">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookname: '',
      author: '',
      publisher: '',
    };
  },
  methods: {
    addFn() {
        document.getElementById('addBtn').disabled=true
      const obj = {
        bookname: this.bookname,
        author: this.author,
        publisher: this.publisher,
      };
      this.$emit('add',obj)
      this.bookname='',
      this.author='',
      this.publisher=''
      document.getElementById('addBtn').disabled=false
    },
  },
};
</script>

<style></style>
