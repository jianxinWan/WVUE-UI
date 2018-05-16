<template>
  <div id="mdShow">
    <router-view></router-view>
  </div>
</template>
<script>
  import navConf from '../nav.config.json'
  /* eslint-disable keyword-spacing,no-undef,key-spacing,quotes */
  export default {
    name: 'App',
    data () {
      return{
        msg:'mdShow',
        navData:navConf
      }
    },
    methods:{
    }
  }
</script>
<style scoped>
  #mdShow{
    width:90%;
    margin: 0 auto;
    z-index:-1;
    padding:20px 0;
    line-height: 2.5rem;
  }
  @media screen and (min-width: 500px){
    #mdShow{
    }
  }
</style>
