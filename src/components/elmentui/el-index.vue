<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      <!--使用组件-->
      <elnav></elnav>
    </el-row>
    <!--嵌套路由-->
    <router-view></router-view>
  </div>
</template>


<script>
  // 引入elmenetui的导航组件
  import elnav from "./el-nav.vue";

  export default {
    //加载组件
    components:{elnav}
  }
</script>
