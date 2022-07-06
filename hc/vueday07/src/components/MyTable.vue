<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-06 20:28:57
 * @LastEditors: sj
 * @LastEditTime: 2022-07-06 20:51:21
-->
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
              <tr v-for="item in arr" :key="item.id" >
                  <td>{{item.id}}</td>
                  <td><slot name="name" :row="item">{{item.name}}</slot></td>
                  <td><slot name="age" :row="item">{{item.age}}</slot></td>
                  <td><slot name="pic" :row="item"></slot></td>
              </tr>
          </thead>
      </table>
  </div>
</template>

<script>
export default {
props:['arr']
}
</script>