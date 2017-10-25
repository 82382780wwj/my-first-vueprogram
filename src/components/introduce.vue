<template>
  <div class="intro">
    <p id="title" class="title">介绍页面</p>
    <div class="paginationWp">
      <div class="pg-data-wp">
        <ul>
          <li v-for=""></li>
        </ul>
      </div>
      <p>{{pgdata.total}}</p>
      <el-pagination
        layout="prev, pager, next"
        :total="parseInt(pgdata.total)*10">
      </el-pagination>
    </div>
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
    100%{color:green;font-size: 20px;font-weight: bold;}
  }
</style>
<script>
  export default {
    name:'introduce',
    data(){
      return{
        pgdata:{
          total:0
        }
      }
    },
    created(){
      this.$http.get('/api/introduce').then(function (response) {
        console.log(response.data)
        this.pgdata=response.data.data;
        //console.log(this.total)
      })
    }
  }
</script>
