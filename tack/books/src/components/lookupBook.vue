<template>
  <div>
    <div class="form-group">
      <label for="exampleInputName2">查找图书</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputName2"
        placeholder="请输入书名"
        v-model.trim="book"
        @keydown.enter="lookupBook"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      book: '',
    }
  },
  methods: {
    lookupBook() {
      if (this.book <= 0) {
         this.$parent.list = this.$parent.list1
        return alert('图书名不能为空')
      }
      this.$emit('lookupBook', this.book)
    },
  },
}
</script>
<style lang="" scoped></style>
