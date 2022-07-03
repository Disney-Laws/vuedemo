<template>
  <div id="app">
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="isshow" @del="del"></TodoMain>
    <TodoFooter
      :count="count"
      @filterData="filterDataFn"
      @clear="clearFn"
    ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      // list: [
      //   { id: 100, name: '吃饭', isDone: true },
      //   { id: 201, name: '睡觉', isDone: false },
      //   { id: 103, name: '打豆豆', isDone: true },
      // ],
      isget: 'all',
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    addFn(val) {
      let id =
        this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1
      this.list.push({
        id,
        name: val,
        isDone: false,
      })
    },
    del(val) {
      let index = this.list.findIndex((item) => item.id == val)
      this.list.splice(index, 1)
    },
    filterDataFn(val) {
      this.isget = val
    },
    clearFn() {
      this.list.forEach((item) => (item.isDone = false))
    },
  },
  computed: {
    count() {
      return this.list.filter((item) => !item.isDone).length
    },
    isshow() {
      if (this.isget == 'yes') {
        return this.list.filter((item) => !item.isDone)
      } else if (this.isget == 'no') {
        return this.list.filter((item) => item.isDone)
      } else {
        return this.list
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem('list', JSON.stringify(val || []))
      },
    },
  },
}
</script>

<style></style>
