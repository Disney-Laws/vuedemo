<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-06 20:26:13
 * @LastEditors: sj
 * @LastEditTime: 2022-07-06 20:56:41
-->
<template>
  <div>
    <MyTable :arr="list">
      <template v-slot:name="scope">
        {{scope.row.name}}
      </template>
       <template v-slot:age="scope">
        {{scope.row.age}}
      </template>
      <template v-slot:pic="scope">
        <a :href="scope.row.headImgUrl" v-if="scope.row.type==0">{{scope.row.headImgUrl}}</a>
       <img :src="scope.row.headImgUrl" v-else-if="scope.row.type==1"/>
       <p v-else-if="scope.row.type==2">{{scope.row.headImgUrl}}</p>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
data(){
  return {
    list: [
        {
          id: 100,
          name: "小传同学",
          age: 18,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
          type: 0, // 0 显示成a标签
        },
        {
          id: 101,
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
          type: 1, // 1 显示成图片
        },
        {
          id: 102,
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
          type: 1, // 1 显示成图片
        },
        {
          id: 103,
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
          type: 2, // 2 显示成文本
        },
      ],
  }
},
components:{
  MyTable
}
}
</script>

<style>

</style>