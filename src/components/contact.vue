<template>
  <div class="contact">
    <p class="title">关注我咯</p>
    <p class="wangsay">觉得我可爱，就请我喝杯牛奶吧O(∩_∩)O</p>
    <div class="img-fa">
      <img :src="pay" alt="">
    </div>
  </div>
</template>
<style scoped="scoped" lang="less">
  .title{
    text-align: center;
    font-size: 40px;
    color: yellowgreen;
    margin-bottom: 10px;
  }
  .wangsay{
    font-size: 14px;
    color: orangered;
    text-align: center;
  }
  .img-fa{
    img{
      width: 100%
    }
  }
</style>
<script>
  export default {
    data (){
      return{
        pay : '../../static/pay.png'
      }
    }
  }
</script>
