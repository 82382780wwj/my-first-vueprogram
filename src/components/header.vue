<template>
  <div class="header">
    <div class="header-wrapper">
      <ul class="nav">
        <li><router-link to="/home">主页</router-link></li>
        <li><router-link to="/introduce">介绍页</router-link></li>
        <li><router-link to="/etc">其他页</router-link></li>
        <li><router-link to="/contact">联系页</router-link></li>
      </ul>
    </div>
  </div>
</template>
<style scoped="scoped">
  .header{
    width:100%;
    height:100px;
    color:#fff;
  }
  .header-wrapper{
    width:100%;
    height:100px;
  }
  .nav{
    width:100%;
    height:100px;
    font-size:15px;
    display: flex;
  }
  .nav li{
    flex: 1;
    height: 100%;
    line-height: 100px;
    text-align: center;
  }

  .nav a{
    display:inline-flex;
    width: 100%;
    color:#c10514;
    border-radius:15px;
    justify-content: center;
  }
  .nav a.router-link-active{
    background:#c10514;
    color:#fff;
  }
</style>
