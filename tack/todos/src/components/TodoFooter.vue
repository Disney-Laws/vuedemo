<template>
  <footer class="footer">
    <span class="todo-count">剩余{{ count }}<strong>数量值</strong></span>
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isel == 'all' }"
          @click="change('all')"
          href="javascript:;"
          >全部</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: isel == 'no' }"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: isel == 'yes' }"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ['count'],
  data() {
    return {
      isel: 'all',
    }
  },
  methods: {
    change(val) {
      this.isel = val
      this.$emit('filterData',val)
    },
    clear(){
       this.$emit('clear')
    }
  },
}
</script>
