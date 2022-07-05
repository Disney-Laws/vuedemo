<template>
  <div id="app">
    <GetAdd :bookList="bookList"></GetAdd>
    <PostAdd :bookList="bookList" @delBook="delBookFn"></PostAdd>
    <DelAdd></DelAdd>
  </div>
</template>

<script>
import GetAdd from "./components/GetAdd.vue";
import PostAdd from "./components/PostAdd.vue";
import DelAdd from "./components/DelAdd.vue";

export default {
  name: "App",
  data() {
    return {
      bookList: [],
    };
  },
  components: {
    GetAdd,
    PostAdd,
    DelAdd,
  },
  created() {
    this.getBookList();
  },
  methods: {
    delBookFn(id) {
      const index = this.bookList.findIndex((ele) => ele.id == id);
      this.bookList.splice(index, 1);
    },
    getBookList() {
      this.$axios({
        url: "/api/getbooks",
      }).then((res) => {
        console.log(res);
        this.bookList = res.data.data;
      });
    },
  },
};
</script>

<style></style>
