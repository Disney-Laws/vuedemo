<template>
  <div>
    <router-link to="/one2/two1">2.1</router-link>&nbsp;
    <router-link to="/one2/two2">2.2</router-link>&nbsp;
    <router-link to="/one2/two3">2.3</router-link>&nbsp;
    <button @click="clickFn(arr)">随机显示</button>
    <div>
      <router-view></router-view>
    </div> 
    <!-- {{arr[num]}} -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            arr:['/one2/two1','/one2/two2','/one2/two3'],
        }
    },
    methods:{
        clickFn(val){
            // let path = val[this.num]
            let path = val[Math.floor(Math.random()*3)]
            console.log(path);
            this.$router.push({
                path
            })
        }
    },
    // computed:{
    //     num(){
    //         return Math.floor(Math.random()*3)
    //     }
    // }
}
</script>

<style scoped>
.router-link-active{
    background-color: red;
    color:black;
}
</style>