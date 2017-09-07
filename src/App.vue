<template>
  <div id="app">
    <div class="nav-top">
      <v-header></v-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import header from './components/header.vue'
  export default {
    name: 'app',
    components: {
      'v-header': header,
    },
    data(){
      return{
        happy:{},
      }
    },
    created(){
      this.$http.get().then(response => {
        console.log(response.data)
        //this.happy = response.data.data;
      }),response => {

      }
    }
  }
</script>
<style>

</style>
