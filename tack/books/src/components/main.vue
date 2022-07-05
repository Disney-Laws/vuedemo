<template>
  <tbody>
    <tr v-for="(item, ind) in list" :key="ind">
      <td>{{ item.id }}</td>
      <td>{{ item.bookname }}</td>
      <td>{{ item.author }}</td>
      <td>{{ item.publisher }}</td>
      <td>
        <a href="" @click.prevent="delBook(item.id)"> 删除 </a>
        <a href="" @click.prevent="details(item.id)"> 详情 </a>
      </td>
    </tr>
  </tbody>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        ;[]
      },
    },
  },
  methods: {
    delBook(val) {
      this.$axios({
        url: '/api/delbook',
        method: 'GET',
         params: {
            id: val
        }
      }).then((res) => {
        console.log(res)
        alert('删除成功')
        location.reload()
      })
    },
    details(val) {
      this.$emit('details', val)
    },
  },
}
</script>
<style lang="" scoped></style>
