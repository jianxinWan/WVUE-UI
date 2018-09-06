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
      <div class="github-fork-warp">
        <a href="https://github.com/sun111sunshine/WVUE-UI">
          <div class="github-link-warp">
            <div class="github-link">
              <p>
                Fork me on GitHub
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="showContent">
      <div class="leftNav animated" @click="hiddenMenu">
        <MenuList>
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
        $(".leftNav").css("visibility","visible");
        $(".leftNav").addClass("slideInLeft");
        $(".leftNav").removeClass("slideOutLeft")
      }else{
        $(".leftNav").addClass("slideOutLeft");
        $(".leftNav").removeClass("slideInLeft");
      }
    },
    hiddenMenu:function(e){
      this.closeMenu();
    },
    closeMenu:function(){
      if(($(".leftNav").hasClass("slideInLeft"))){
        $(".leftNav").addClass("slideOutLeft");
        $(".leftNav").removeClass("slideInLeft");
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
    justify-content:space-between;
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
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
    min-height: 59rem;
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
    height: inherit;
    background-color: white;
    visibility: hidden;
    z-index:99;
  }
  .showRightCont{
    width: 100%;
    flex-grow: 2;
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
  .github-fork-warp{
    position: absolute;
    top: 0;
    right: 0;
    width:120px;
    height:120px;
    overflow: hidden;
  }
  .github-link-warp{
    height:1.8rem;
    padding: 0 0.5rem;
    width: 141%;
    background-color: #42b983;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform-origin:2.5rem 1rem;/*设置旋转中心为元素中心*/
    transform:rotate(45deg);
    -ms-transform:rotate(45deg); /* IE 9 */
    -webkit-transform:rotate(45deg); /* Safari and Chrome */
    box-shadow: 2px 2px 1px #888888;
  }
  .github-link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.8rem;
  }
  .github-link::before , .github-link::after{
    content: "";
    border: 1px dashed #ffffff;
    border-bottom: none;
    margin: 0.3rem;
  }
  .github-link:hover{
    cursor: pointer;
  }
  @media screen and (min-width: 500px){
    .startMenu{
      display: none;
    }
    .headLogo:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
    .showContent{
      min-height: 78rem;
    }
    .leftNav{
      position: relative;
      width: 16rem;
      visibility: visible;
      height:inherit;
    }
    .showRightCont{
      border-right:1px solid rgb(200,200,200);
      box-shadow:0 15px 10px rgb(190,190,190);
      text-align: left;
      margin-left: 2.5rem;
    }
    .github-fork-warp{
      width: 160px;
      height:160px;
    }
    .github-link{
      font-size: 0.95rem;
    }
    .github-link::before , .github-link::after{
      margin: 0.2rem;
    }
  }
</style>
