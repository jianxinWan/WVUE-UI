<template id="show">
  <div class="startAll" >
    <div class="showHeader">
      <div class="startMenu" @click="showMenu">
        <img src="../assets/img/menu.png">
      </div>
      <div class="headLogo">
        <h2>
          <router-link to="/" tag="div">
            WVUE-UI
          </router-link>
        </h2>
      </div>
    </div>
    <div class="showContent">
      <div class="leftNav animated">
        <MenuList >
        </MenuList>
      </div>
      <div class="showRightCont" @click="closeMenu">
        <mdShow id="mdShow">
        </mdShow>
      </div>
    </div>
    <div class="showFooter">
      <showFooter></showFooter>
    </div>
  </div>
</template>
<script>
  import MenuList from '../components/menuList.vue'
  import mdShow from '../components/mdShow.vue'
  import showFooter from '../components/showFooter.vue'
  /* eslint-disable keyword-spacing,no-undef,indent,key-spacing,quotes,space-before-function-paren,semi,comma-spacing,space-before-blocks */
  export default {
  name: 'Hello',
  data () {
    return {
      msg: '展示',
      menuShow:false
    }
  },
  methods:{
    showMenu:function(event) {
      if(!($(".leftNav").hasClass("slideInLeft"))){
        $(".leftNav").css("visibility","visible")
        $(".leftNav").addClass("slideInLeft")
        $(".leftNav").removeClass("slideOutLeft")
      }else{
        $(".leftNav").addClass("slideOutLeft")
        $(".leftNav").removeClass("slideInLeft")
      }
    },
    closeMenu:function(){
      if(($(".leftNav").hasClass("slideInLeft"))){
        $(".leftNav").addClass("slideOutLeft")
        $(".leftNav").removeClass("slideInLeft")
      }
    }
  },
  components:{
    MenuList,
    mdShow,
    showFooter
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .startAll{
    width: 100%;
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .showHeader{
    width: 100%;
    height:3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: white;
    z-index: 2;
    border-bottom: 1px solid rgb(180,180,180);
  }
  .showContent{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    min-height: 45rem;
  }
  .showFooter{
    width:100%;
    height:10rem;
    margin-top: 2rem;
    box-shadow:-10px 0 10px rgb(190,190,190);
  }
  .leftNav{
    position: absolute;
    width: 16rem;
    min-height: inherit;
    background-color: white;
    visibility: hidden;
  }
  .showRightCont{
    width: 100%;
    height:100%;
    min-height: inherit;
  }
  .startMenu{
    width: 3rem;
    height:3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .startMenu img{
    width: 2rem;
    height:2rem;
  }
  .headLogo{
    width: 17rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    line-height: 3rem;
    color:#42b983;
    transition: all 0.4s;
  }

  @media screen and (min-width: 500px){
    .startMenu{
      display: none;
    }
    .headLogo:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
    .leftNav{
      position: relative;
      width: 16rem;
      visibility: visible;
    }
    .showRightCont{
      width:80%;
      height:100%;
      border-right:1px solid rgb(200,200,200);
      box-shadow:0 15px 10px rgb(190,190,190);
      text-align: left;
    }
  }
</style>
