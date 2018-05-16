<template>
  <div class="hello">
    <div class="wvue-font">
      <img src="../assets/img/WVUE-log.png" class="animated swing fontImg">
      <div class="showRightLink">
        <a href="https://github.com/sun111sunshine">
          <img src="../assets/img/github.png" class="rightGithub">
        </a>
        <a href="https://blog.csdn.net/shine_sunny1">
          <img src="../assets/img/csdn.png" class="rightCsdn">
        </a>
      </div>
    </div>
    <div class="logo">
      <router-link to="/uiList" tag="div">
        <a href="/uiList">
          <div class="logoImg">
            <img src="../assets/img/logo2.png" width="100%" height="auto">
          </div>
        </a>
      </router-link>
    </div>
    <div class="uiInfo">
      <h3 :text="msg" class="uiInfoTit">{{msg}}</h3>
    </div>
    <div class="link">
      <div class="startAndShow">
        <div class="startBtnArea">
          <router-link to="/show/giud" tag="div">
            <div class="startBtn">
              <span>
                开始
              </span>
            </div>
          </router-link>
          <router-link to="/uiList" tag="div">
            <div class="showBtn">查看演示</div>
          </router-link>
        </div>
      </div>
      <div class="linkConent">
        <div class="csdn linkHref">
          <span>
            <img src="../assets/img/csdn.png" width="23px" height="23px">
          </span>
          <a :href="csdnLink">{{csdnLink}}</a>
        </div>
        <div class="github linkHref">
          <span><img src="../assets/img/github.png" width="23px" height="23px"></span>
          <a :href="githubLink">{{githubLink}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable key-spacing */
  export default {
    name: 'Hello',
    data () {
      return {
        msg: '一款基于vue2.0的手机端UI组件',
        csdnLink:'https://blog.csdn.net/shine_sunny1',
        githubLink:'https://github.com/sun111sunshine'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .hello{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .wvue-font{
    width: 100%;
    height:5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wvue-font .fontImg{
    width: 18rem;
    height: auto;
  }
  .showRightLink{
    width: 15rem;
    height: 5rem;
    display: none;
  }
  .showRightLink a img{
    width:2rem;
    height:2rem;
    padding: 1.5rem 0.5rem;
  }
  .logo{
    width:100%;
    height:16rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .logoImg{
    height:20rem;
    width: 20rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .uiInfo{
    width: 100%;
    height:3rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
  .uiInfoTit{
    color: gray;
  }
  .link{
    width: 100%;
    height:14rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .startAndShow{
    width: 20rem;
    height:8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .startBtnArea{
    width: 100%;
    height:3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .startBtn,.showBtn{
    width: 5rem;
    height:2.5rem;
    border-radius: 5px;
    line-height: 2.5rem;
    background-color:rgb(87,200,200);
    color: white;
  }
  .linkConent{
    width: 15rem;
    height:6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .linkHref{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .linkHref a{
    line-height:27px;
  }
  @media screen and (min-width: 500px){
    .wvue-font{
      justify-content: space-between;
    }
    .showRightLink{
      display: block;
    }
    .logo{
      height:25rem;
    }
    .logoImg{
      width: 30rem;
      height:30rem;
    }
    .linkConent{
      display: none;
    }
    .uiInfo{
      height:5rem;
      font-size: 2rem;
    }
    .uiInfo .uiInfoTit{
      color:rgb(163,234,110);
    }
    .uiInfoTit:before{
      content: attr(text);
      position: absolute;
      z-index: 10;
      color:rgb(97,218,169);
      -webkit-mask:linear-gradient(to right, rgb(97,218,169),transparent);
    }
    .startAndShow{
      width: 30rem;
    }
    .startBtnArea{
      width: 30rem;
      height:5rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .startBtn,.showBtn{
      width: 10rem;
      height:4rem;
      line-height: 4rem;
      font-size: 1.5rem;
      border-radius: 1.8rem;
      text-align: center;
      background-color:white;
      border: 1px solid #3FAAF5;
      color:#3FAAF5;
      /*background-color: #3FAAF5;*/
    }
    .startBtn:hover,.showBtn:hover{
      cursor:pointer;
      background:linear-gradient(to right,#3FAAF5, #646ef0);
      color: white;
    }
  }
</style>
