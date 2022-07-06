<template>
  <div>
    <table border="1">
          <thead>
            <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>展示</th>
            </tr>
          </thead>
          <tbody>
            <slot>
            </slot>
          </tbody>
        </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
        
        }
    },
    
}
</script>

<style>

</style>