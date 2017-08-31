<template>
  <div class="happy">
    happytime
    <div class="clearfix">
      <ul class="happyul">
        <!--@click="chosetime" :class="{timechoosed:item.istimechoosed}" -->
        <li class="happytime" v-for="item in happy">{{item.name}}</li>
      </ul>
      <ul class="happyimgul">
        <li class="happyimg" v-for="item in happy1img"><img :src="'./'+item" alt=""></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        happy:[],
        happy1img:[]
      };
    },
//    methods: {
//      chosetime: function () {
//        alert(11)
//      }
//    },
    created() {
      let _this = this;
      this.$http.get('/api/happy').then(function (response){
        console.log(response.data.data[0].img);
        _this.happy = response.data.data;
        _this.happy1img = _this.happy[0].img;
        console.log('happy'+_this.happy[0].img);
      },response => {
        console.log("err"+response.data.data);
      })
    }
  }
</script>
<style scoped="scoped">
  .happyul{
    height: 50%;
    position: fixed;
  }
  .happyul li{
    height: 33.3%;
    text-align: center;
  }
  .happytime{
    border: 1px solid #c10514;
    writing-mode:tb-rl;
    background:-moz-linear-gradient(top, #e5a3a3, rgba(246, 232, 232, 0.5));
    background:linear-gradient(top, #e5a3a3, rgba(246, 232, 232, 0.5));
  }
</style>
