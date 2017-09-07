<template>
  <div class="happy">
    <!--happytime-->
    <!--<img :src="imgUrl" alt="">-->
    <div class="happy-wrapper clearfix">
      <div class="menuwrapper" ref="menu">
        <ul class="happyul">
          <li class="happytime" v-for="item in happy">{{item.name}}</li>
        </ul>
      </div>
      <div class="img-wrapper" ref="imgs">
        <ul>
          <li v-for="item in happy" class="img-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul class="img-ul">
              <li class="img-list" v-for="img in item.img"><img :src="img" alt=""></li>
            </ul>
          </li>
          <!--<li class="happyimg"><img :src="imgUrl2" alt=""></li>-->
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
        imgUrl : require('../../static/1.jpg'),
        imgUrl2:pic,
        imgListHeight:[]
      };
    },
    created() {
      let _this = this;
      this.$http.get('/api/happy').then(function (response){
        console.log(response.data.data[0].img);
        _this.happy = response.data.data;
        console.log('happy'+_this.happy[0]);
        _this.$nextTick(() => {
          _this.initScroll();
        })
      },response => {
        console.log("err"+response.data.data);
      })
    },
    computed:{
      currentIndex(){
        for (let i=0;i<this.imgListHeight.length-1;i++){

        }
      }
    },
    methods: {
      initScroll(){
        this.menuScroll = new bscroll(this.$refs.menu,{
          click: true
        })
        this.imgScroll = new bscroll(this.$refs.imgs,{
          click: true
        })
      },
      calcHeight(){
        let imgList = this.$refs.imgs.getElementsByClassName("img-list-hook");
        let height = 0;
        this.imgListHeight.push(height);
        for (let i = 0; i < imgList.length; i++){
          height += imgList[i].clientHeight;
          this.imgListHeight.push(height);
          console.log(this.imgListHeight);
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .happy-wrapper{
    display: flex;
    position: absolute;
    top: 0px;
    bottom: 0px;
    overflow: hidden;
  }
  .menuwrapper{
    flex:0 0 30px;
    width: 30px;
  }
  .happyul{
    li{
      width: 30px;
      text-align: center;
      height: 100px;
      line-height: 30px;
    }
  }
  .happytime{
    writing-mode:tb-rl;
    background:-moz-linear-gradient(top, #e5a3a3, rgba(246, 232, 232, 0.5));
    background:linear-gradient(top, #e5a3a3, rgba(246, 232, 232, 0.5));
  }
  .menuactive{
    background: #fff;
  }
  .img-wrapper{
    flex: 1;
    font-size: 0px;
    background: #fff;
    .title{
      padding-left: 10px;
      font-size: 16px;
      height: 20px;
      line-height: 20px;
      background: rgba(246, 232, 232, 0.5);
      border-left: 2px solid rgb(246, 149, 149);
      margin-bottom: 4px;
    }
    .img-ul{
      padding-left: 10px;
      display: flex;
      flex-wrap: wrap;
    }
    .img-list{
      flex: 0 0 70px;
      margin-right: 4px;
      margin-bottom: 2px;
      img{
        width: 70px;
        height: 70px;
      }
    }
  }
</style>
