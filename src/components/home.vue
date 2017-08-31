<template>
  <div class="home">
    <!--首页-->
    <!--使用组件-->
    <e-carousel></e-carousel>
    <div class="tab-box">
      <ul>
        <li><router-link to="/happy">开心时光</router-link></li>
        <li><router-link to="/">特长才艺</router-link></li>
        <li><router-link to="/">爱好</router-link></li>
        <li><router-link to="/">梦想</router-link></li>
      </ul>
    </div>
  </div>
</template>
<style scoped="scoped">
  .home{
    color: olive;
  }
  .tab-box ul{
    display: flex;
    height: 80px;
    line-height: 80px;
  }
  .tab-box ul li{
    flex: 1;
    text-align: center;
  }
  .tab-box ul li:nth-child(1){
    background: url("../assets/images/happy.gif") no-repeat;
    background-size: cover;
  }
</style>
<script>
  // 引入elmenetui的导航组件
  import elcarousel from "./elmentui/el-carousel.vue";
  export default {
    name: 'home',
    components: {
      'e-carousel': elcarousel,
    }
  }
</script>
