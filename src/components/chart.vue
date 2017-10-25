<template>
  <div id="chart" style="width:100%;height: 400px"></div>
</template>
<style scoped lang="less">

</style>
<script>
  import echarts from 'echarts'
  export default {
    data(){
      return{
        city: []
      }
    },
    name:'chart',
    mounted(){
      Array.prototype.unique3 = function(){
        var res = []
        var json = {}
        for(var i = 0; i < this.length; i++){
          if(!json[this[i]]){
            res.push(this[i])
            json[this[i]] = 1
          }else {
            json[this[i]]++
          }
        }
        return JSON.stringify(json)
      }
      let mychart = echarts.init(document.getElementById('chart'))
      this.$http.get('/api/etc').then(function (response) {
        var data = []
        for(var i=0;i<response.data.data.length;i++){
          data.push(response.data.data[i].place)
        }
        this.city = data.unique3()
        var _this = this
        this.$nextTick(function () {
          var city = JSON.parse(_this.city)
          console.log(city)
          var datacity =[]
          for (var i in city){
            datacity.push({value:city[i],name:i})
          }
          console.log(datacity)
          mychart.setOption({
            title : {
              text: '我去过的城市'
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data:datacity
              }
            ]
          })
        })
      })

    }
  }
</script>
