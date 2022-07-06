<template>
  <div>
    <Mytable>
        <tr v-for="item in list" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>
                <a :href="item.headImgUrl" v-if="item.type==0">{{item.headImgUrl}}</a>
                <img :src="item.headImgUrl" alt="" v-else-if="item.type==1">
                <p v-else-if="item.type==2">{{item.headImgUrl}}</p>
                </td>
        </tr>
    </Mytable>
  </div>
</template>

<script>
import Mytable from './components/Mytablexqz.vue'
export default {
    data() {
        return {
            list: [
                {
                    id: 100,
                    name: "小传同学",
                    age: 18,
                    headImgUrl: "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
                    type: 0, // 0 显示成a标签
                },
                {
                    id: 101,
                    name: "小黑同学",
                    age: 25,
                    headImgUrl: "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
                    type: 1, // 1 显示成图片
                },
                {
                    id: 102,
                    name: "智慧同学",
                    age: 21,
                    headImgUrl: "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
                    type: 1, // 1 显示成图片
                },
                {
                    id: 103,
                    name: "智慧同学",
                    age: 21,
                    headImgUrl: "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
                    type: 2, // 2 显示成文本
                },
            ],
        };
    },
    components: { Mytable },
    computed:{
    
    }
}
</script>

<style>

</style>