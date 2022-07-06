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
      <tbody>
        <tr v-for="(obj, index) in arr" :key="index">
          <td>
            <slot name="index" :row="obj">{{ index + 1 }}</slot>
          </td>
          <td>
            <slot name="name" :row="obj">{{ obj.name }}</slot>
          </td>
          <td>
            <slot name="age" :row="obj">{{ obj.age }}</slot>
          </td>
          <td>
            <slot name="img" :row="obj">{{ obj.headImgUrl }} </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    arr: Array,
  },
};
</script>
