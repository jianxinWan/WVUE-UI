<template>
  <div class="footerAuthor">
    <div class="authorInfoArea">
      <div class="authorImg">
        <img src="../assets/img/authorImg.jpg">
      </div>
      <div class="authorAndEmail">
        <p><label>author:</label><span>{{author}}</span></p>
        <p><label>email:</label><span>{{email}}</span></p>
        <p><label>address:</label><span><a href="https://xiyoumobile.com/" target="_blank">{{address}}</a></span></p>
        <p><label>csdn:</label><span><a :href="csdn" target="_blank">{{csdn}}</a></span></p>
        <P><label>github:</label><span><a :href="github" target="_blank">{{github}}</a></span></P>
      </div>
    </div>
    <div class="otherInfo"></div>
  </div>
</template>
<script>
  /* eslint-disable key-spacing,quotes */
  export default {
    name: 'App',
    data () {
      return {
        author:"origin",
        email:"1158810459@qq.com",
        address:"西邮移动应用开发实验室",
        csdn:"https://blog.csdn.net/SHINE_SUNNY1",
        github:"https://github.com/sun111sunshine"
      }
    }
  }
</script>

<style scoped>
  .footerAuthor{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .authorInfoArea{
    width: 23rem;
    height:10rem;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
  }
  .authorAndEmail{
    text-align: left;
    font-size: 0.8rem;
  }
  .authorImg{
    width: 4rem;
    height:4rem;
  }
  .authorImg img{
    width: 4rem;
    height:4rem;
  }
</style>
