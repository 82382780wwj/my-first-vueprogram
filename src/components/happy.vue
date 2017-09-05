<template>
  <div class="happy">
    happytime
    <img :src="imgUrl" alt="">
    <div class="clearfix">
      <ul class="happyul">
        <li class="happytime" v-for="item in happy">{{item.name}}</li>
      </ul>
      <div class="wrapper" ref="wrapper">
        <ul class="happyimgul content">
          <li class="happyimg" v-for="item in happy1img"><img :src="item" alt=""></li>
          <li class="happyimg"><img :src="imgUrl2" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import pic from './mypic.jpg'
  import bscroll from 'better-scroll'
  export default {
    data(){
      return{
        happy:[],
        happy1img:[],
        imgUrl : require('../../static/1.jpg'),
        imgUrl2:pic
      };
    },
    created() {
      let _this = this;
      this.$http.get('/api/happy').then(function (response){
        console.log(response.data.data[0].img);
        _this.happy = response.data.data;
        _this.happy1img = _this.happy[0].img;
        console.log('happy'+_this.happy[0]);
      },response => {
        console.log("err"+response.data.data);
      })
    }
  }
</script>
<style lang="less" scoped>
  .happyul{
    height: 50%;
    position: fixed;
    li{
      width: 30px;
      text-align: center;
      height: 33.3%;
      line-height: 30px;
    }
  }
  .happytime{
    border: 1px solid #c10514;
    writing-mode:tb-rl;
    background:-moz-linear-gradient(top, #e5a3a3, rgba(246, 232, 232, 0.5));
    background:linear-gradient(top, #e5a3a3, rgba(246, 232, 232, 0.5));
  }
  .happyimgul{
    margin-left: 40px;
    li{
      float: left;
    }
    img{
      width: 80px;
      height: 80px;
    }
  }
  img{
    width: 50px;
    height: 50px;
    margin: 0 1px 1px;
  }
</style>
