<template>
  <div class="hobby">
    <ul class="clearfix">
      <li>
        <div class="background"></div>
        <img class="rotation img1" src="../../static/8.jpg" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="less" scoped="scoped">
  .hobby{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    ul{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    li{
      float: left;
      width: 100%;
      height: 100%;
      position: relative;
    }
    li:nth-of-type(1){
      .background{
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../../static/a.jpg") no-repeat;
        background-size: cover;
        filter: blur(2px);
      }
    }
    @-webkit-keyframes rotation{
      from {-webkit-transform: rotate(0deg);}
      to {-webkit-transform: rotate(360deg);}
    }
    .rotation{
      -webkit-transform: rotate(360deg);
      animation: rotation 3s linear infinite;
      -moz-animation: rotation 3s linear infinite;
      -webkit-animation: rotation 3s linear infinite;
      -o-animation: rotation 3s linear infinite;
    }
    .img1{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
    }
  }
</style>
