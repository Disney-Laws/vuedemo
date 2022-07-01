<template>
  <div>
    <h1>使用同一个过滤器处理1876986粉丝数量</h1>
    <p>国内网站:粉丝数量:{{ 1876986 | num(10000)}}万</p>
    <p>国外网站:粉丝数量:{{ 1876986 | num(1000)}}千</p>
    <h1>使用同一个过滤器处理1636450540055时间戳</h1>
    <p>时间：{{ 1636450540055 | formatDate('-')}}</p>
    <p>时间：{{ 1636450540055 | formatDate('/')}}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data(){
    return{

    }
  },
  filters:{
    num(val,num){
      return val/num
    },
    formatDate(val,spl){
      return moment(val).format('YYYY'+spl+'MM'+spl+'DD')
    }
  }

}
</script>

<style>

</style>