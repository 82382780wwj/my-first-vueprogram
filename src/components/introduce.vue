<template>
  <div class="intro">
    <p id="title" class="title">介绍页面</p>
  </div>
</template>
<style scoped lang="less">
  .title{
    color: palevioletred;
    overflow: hidden;
    animation: titlefirst 5s;
  }
  @keyframes titlefirst
  {
    0% {width: 0;}
    90% {width: 100%;}
    100%{color:green;font-size: 20px;font-weight: bold}
  }
</style>
<script>
  export default {
    name:'introduce',
  }
</script>
