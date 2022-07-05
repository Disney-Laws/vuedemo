<template>
  <div>
    <div class="box">
      <div class="form-group">
        <label for="exampleInputBook">书名</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputBook"
          placeholder="书名"
          v-model.trim="obj.bookname"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputZuo">作者</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputZuo"
          placeholder="作者"
          v-model.trim="obj.author"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">出版商</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="出版商"
          v-model.trim="obj.publisher"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="addbook">
        添加
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: {
        bookname: '',
        author: '',
        publisher: '',
      },
    }
  },
  methods: {
    addbook() {
      if (
        this.obj.bookname.length == 0 ||
        this.obj.author.length == 0 ||
        this.obj.publisher.length == 0
      ) {
        return alert('输入不能为空')
      }
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          ...this.obj,
        },
      }).then((res) => {
        if (res.status == 200) {
          alert(res.data.msg)
        }
        location.reload()
      })
      this.obj.bookname = ''
      this.obj.author = ''
      this.obj.publisher = ''
    },
  },
}
</script>
<style lang="less" scoped>
.box {
  width: 500px;
}
</style>
