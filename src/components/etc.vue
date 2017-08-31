<template>
  <div class="tec">
    其他页面
    <ul>
      <li v-for="article in articles">
        {{article.text}}
      </li>
    </ul>
  </div>
</template>
<style scoped="scoped">
.tec{
  color: cadetblue;
}
  li{
    background: palegreen;
    width: 100%;
    height: 10px;
    margin-bottom: 1px;
  }
</style>
<script>
  export default {
    name:'etc',
    data(){
      return{
        articles:[]
      }
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
        headers:{},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.articles=response.data.subjects
      }),function () {
        // 这里是处理错误的回调
        console.log(response)
      }
    }
  }
</script>
