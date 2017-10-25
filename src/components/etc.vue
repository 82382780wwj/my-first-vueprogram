<template>
  <div class="tec">
    <div class="img-fa">
      <img :src="bgurl" alt="">
    </div>
    <div class="imgli-fa clearfix">
      <div class="imgli left" v-for="etcs in etc">
        <div class="imgli-imgfa">
          <router-link :to="{ path:'/detail', name:'detail', query:{ id:etcs.id}}"><img :src="etcs.slideshow[0]" alt=""></router-link>
        </div>
        <p class="time">{{etcs.time}}</p>
        <p class="place">拍摄于{{etcs.place}}</p>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped" lang="less">
  .img-fa {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .left {
    float: left;
  }
  .imgli:nth-of-type(odd){
    margin-right: 4%;
  }
  .imgli{
    width: 48%;
    margin-bottom: 10px;
    .imgli-imgfa{
      width: 100%;
      overflow: hidden;
      height: 140px;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      img{
        width: 100%;
      }
    }
    .time{
      font-size: 12px;
      color: #9b9b9b;
      padding: 5px 0px 2px 10px;
    }
    .place{
      font-size: 14px;
      color: #9b9b9b;
      padding: 0px 0px 15px 10px;
    }
  }
</style>
<script>
  export default {
    name:'etc',
    data(){
      return{
        bgurl:'../../static/2.jpg',
        etc:[]
      }
    },
    created(){
      this.$http.get('/api/etc').then(function (respones) {
        console.log(respones.data.data)
        this.etc = respones.data.data
      })
    }
  }
</script>
