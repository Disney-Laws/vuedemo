<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头像</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ index }}</td>
          <td>
            <slot name="name" :row="item">{{item.name}}</slot>
            </td>
          <td>
            <slot name="age" :row="item">{{item.age}}</slot>
          </td>
          <td>
            <slot name="Img" :row="item"></slot>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['arr'],
};
</script>
