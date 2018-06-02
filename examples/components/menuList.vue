<template>
  <div class="MenuList animated">
    <div v-for="title in (Object.keys(menuData))">
      <p class="navTit">{{title}}</p>
      <div v-for="nav in menuData[title]" v-if="nav.desc" class="navChild">
        <router-link  tag="div" v-if="nav.name" :to="{name: nav.name}" class="aLink">{{nav.desc}}</router-link>
        <p v-else class="componentClass">{{nav.desc}}</p>
        <div v-for="item in nav.items" class="everyComponents">
          <router-link tag="div" :to="{name: item.name}" class="aLink">{{item.desc}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable key-spacing */
  import menuListConf from '../nav.config.json'
  export default {
    name: 'App',
    data () {
      return {
        menuData: menuListConf
      }
    }
  }
</script>
<style scoped>
  .MenuList{
    width: 100%;
    height:100%;
    z-index:10;
    border-right:1px solid rgb(200,200,200);
    box-shadow:0 15px 10px rgb(190,190,190);
    text-align: left;
    background-color: white;
  }
  .navTit{
    width: 100%;
    height:2rem;
    line-height: 2rem;
    color:#8DABC4;
    padding-left:2rem;
   }
  .navChild{
    padding-left:2.5rem;
    margin-top: 1rem;
  }
  .componentClass{
    width: 100%;
    height:2rem;
    line-height:2rem;
    font-size: 1.2rem;
  }
  .everyComponents{
    padding-left:1rem;
    margin-top:1rem;
  }
  .aLink:hover{
    cursor: pointer;
    color: #3FAAF5;
  }
  .aLink:visited{
    color: #3FAAF5;
  }
  @media screen and (min-width: 500px){
    .MenuList{
      visibility: visible;
      padding: 0;
    }
  }
</style>
