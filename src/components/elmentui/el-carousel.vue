<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(3) {
    background: url("../../../static/a.jpg") no-repeat;
    background-size: cover;
  }

  .el-carousel__item:nth-child(4) {
    background: url("../../../static/b.jpg") no-repeat;
    background-size: cover;
  }
  .el-carousel__item:nth-child(5) {
    background: url("../../../static/5.jpg") no-repeat;
    background-size: cover;
  }

  .el-carousel__item:nth-child(6) {
    background: url("../../../static/6.jpg") no-repeat;
    background-size: cover;
  }
  .el-carousel__item:nth-child(7) {
    background: url("../../../static/7.jpg") no-repeat;
    background-size: cover;
  }

  .el-carousel__item:nth-child(8) {
    background: url("../../../static/8.jpg") no-repeat;
    background-size: cover;
  }
</style>
