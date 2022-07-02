<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-01 21:06:02
 * @LastEditors: sj
 * @LastEditTime: 2022-07-01 23:00:34
-->
<template>
  <div>
{{time | forDate(1)}}
<br>
{{time | forDate(2)}}
<br>
{{ number | num(1)}}
<br>
{{ number | num(2)}}
  </div>
</template>

<script>
export default {
   data(){
    return {
      time: new Date(),
      number: 1876986
    }
   },
  filters:{
    forDate(val,num){
      if(num==1){
       return val.toLocaleString().slice(0,8)
        
      }else if(num==2){
         return val.toLocaleString().slice(0,8).replaceAll('/','-')      
      }
    
    },
    num(val,n){
      if(n==1){
      const arr =val.toString().split('')
            arr.splice(3,0,'.')
      return arr.join('') +'万'
      }else if(n==2){
        return (val/1000).toFixed(3) +'千'
      }
    
    }
  }
}
</script>

<style>

</style>