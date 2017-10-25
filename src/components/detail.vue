<template>
  <div class="detail-wp">
    <el-carousel       >
      <el-carousel-item v-for="results in result.slideshow" :key="results">
        <div class="img-fa">
          <img :src="results" alt="">
          <span @click="returnback" class="return-back"></span>
        </div>
      </el-carousel-item>
    </el-carousel>
    <p class="describe">{{result.describe}}</p>
    <p class="time">{{result.time}}</p>
    <p class="place">拍摄于{{result.place}}</p>
    <chart></chart>
  </div>
</template>
<style scoped lang="less">
  .detail-wp{
    position: relative;
    top: -94px;
  }
  .time,
  .place{
    margin-left: 3%;
    font-size: 14px;
  }
  .img-fa{
    width: 100%;
    margin: 0 auto;
    background: #fff;
    text-align: center;
    img{
      width: 94%;
    }
  }
  .describe{
    margin-left: 3%;
    font-size: 14px;
    text-align: left;
    color: #4a4a4a;
    padding-top: 10px;
    line-height: 20px;
  }
  .return-back{
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    left: 10px;
    background: url("../../static/return_icon.png") no-repeat;
  }
</style>
<script>
  import chart from "./chart.vue"
export default {
  name:'detail',
  data(){
    return{
      result:[]
    }
  },
  components: {
    'chart': chart,
  },
  created(){
    this.$http.get('/api/etc').then(function (respones) {
      var data = respones.data.data
      var id = window.location.href.split('id=')[1]
      this.result=this.getdatabyid(id,data)
      console.log(this.result)
    })
  },
  methods:{
    getdatabyid(id,data) {
      var result = {}
      for(var i=0;i<data.length;i++){
        if(data[i].id===id){
          result = data[i]
        }
      }
      return result
    },
    returnback: function () {
      window.history.go(-1)
    }
  }
}
</script>
