<template>
  <!-- 哆啦A梦 -->
  <div class="doa">
    <!-- 头 -->
    <div class="head">
      <div class="face">
        <div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>

      <div class="nose">
        <div></div>
      </div>
      <div class="nose1"></div>
    </div>

    <!-- 嘴 -->

    <div class="mouth">
      <div></div>
      <div></div>
    </div>

    <!-- 脖 -->

    <div class="neck">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 胡须 -->

    <div class="beard">
      <div class="left">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="right">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'd-cartoon',
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
  /*哆啦A梦*/
  .doa{
    position: relative;
    margin-top: 50px;
  }
  .head{
    margin: 0 auto;
    width: 400px;
    height: 350px;
    background: #008ee3;
    position: relative;
    border-radius: 50% 50% 25% 25% / 55% 55% 45% 45%;
  }
  .head:hover .face>div:first-child div{
    left: 0;
    transition: all 1s;
  }
  .head:hover .face>div:first-child div div{
    left: 0;
    transition: all 1s;
  }
  .face{
    width: 310px;
    height: 260px;
    background: snow;
    border-radius: 50% 50% 25% 25% / 55% 55% 45% 45%;
    position: relative;
    top: 90px;
    left: 45px;
  }
  /*左眼眶*/
  .face>div:first-child{
    width: 80px;
    height: 100px;
    border-radius: 50%;
    border:2px #000 solid;
    background: snow;
    float: left;
    position: relative;
    top:-40px;
    left: 71px;
    z-index: 50;
  }
  /*右眼眶*/
  .face>div:last-child{
    width: 80px;
    height: 100px;
    border-radius: 50%;
    border:2px #000 solid;
    background: snow;
    float: left;
    position: relative;
    top:-40px;
    left: 71px;
    z-index: 50;
  }
  /*左眼珠1*/
  .face>div:first-child div{
    width: 20px;
    height: 25px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 45px;
    left: 60px;
  }
  /*左瞳孔*/
  .face>div:first-child div div{
    width: 10px;
    height: 10px;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 10px;
  }
  /*右眼珠*/
  .face>div:last-child div{
    width: 20px;
    height: 25px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 45px;
  }
  /*右瞳孔*/
  .face>div:last-child div div{
    width: 10px;
    height: 10px;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 7px;
  }
  .nose{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #c70000;
    position: absolute;
    top: 130px;
    left: 50%;
    margin-left: -15px;
    z-index: 10;
  }
  .nose div{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    background: #ffffff;
    top: 10px;
    margin-left: 20px;
    z-index: 10;
  }
  .nose1{
    width: 2px;
    height: 130px;
    background: #000;
    position: absolute;
    top: 160px;
    left: 50%;
    margin-left: -1px;
    z-index: 10;
  }
  .mouth{
    width: 250px;
    height: 200px;
    border-radius: 50%;
    background: snow;
    border-bottom: 2px #000 solid;
    margin: -230px auto;
    position: relative;
  }
  .mouth div:first-child{
    width: 82px;
    height: 2px;
    background: #000;
    position: absolute;
    z-index: 1000;
    top: -25px;
    left: 6px;
    display: none;
  }
  .mouth div:nth-child(2){
    width: 82px;
    height: 2px;
    background: #000;
    position: absolute;
    z-index: 1000;
    top: -25px;
    left: 90px;
    display: none;
  }
  .mouth:hover{
    border-radius: 0;
    width: 180px;
    height: 200px;
  }
  .mouth:hover div:first-child,.mouth:hover div:nth-child(2){
    display: block;
  }
  .neck{
    width: 330px;
    height: 200px;
    border-radius: 50% 50% 20% 20% / 50% 50% 50% 50%;
    background: #e30000;
    margin: 80px auto;
    z-index: 100;
  }
  .neck div:first-child{
    border: 2px #000 solid;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: #ffdd2e;
    position: absolute;
    top: 350px;
    left: 50%;
    margin-left: -22px;
    transition: all 1s;
  }
  .neck div:nth-child(2){
    border: 2px #000 solid;
    width: 44px;
    height: 5px;
    background: #ffdd2e;
    position: absolute;
    left: 50%;
    margin-left: -24px;
    top: 363px;
    border-radius: 5px;
    transition: all 1s;
  }
  .neck div:nth-child(3){
    width: 8px;
    height: 8px;
    border: 2px #000 solid;
    position: absolute;
    background: #6c5844;
    border-radius: 50%;
    left: 50%;
    margin-left: -6px;
    top: 375px;
    transition: all 1s;
  }
  .neck div:nth-child(4){
    width: 2px;
    height: 8px;
    background: #000;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    top: 385px;
    transition: all 1s;
  }
  .neck:hover div:first-child{
    width: 60px;
    height: 60px;
    left: 50%;
    margin-left: -30px;
  }
  .neck:hover div:nth-child(2){
    width: 66px;
    height: 7.5px;
    left: 50%;
    margin-left: -33px;
  }
  .neck:hover div:nth-child(3){
    width: 12px;
    height: 12px;
    left: 50%;
    margin-left: -6px;
    top: 385px;
  }
  .neck:hover div:nth-child(4){
    width: 2px;
    height: 12px;
    left: 50%;
    margin-left: 1px;
    top: 400px;
  }
  .beard .left div:first-child{
    width: 120px;
    height: 40px;
    border-top: 2px #000 solid;
    border-radius: 10% 90% 10% 90% / 10% 90% 10% 90%;
    position: absolute;
    left: 50%;
    top: 140px;
    margin-left: -170px;
    z-index: 100;
  }
  .beard .left div:nth-child(2){
    width: 120px;
    height: 40px;
    border-top: 2px #000 solid;
    border-radius: 10% 90% 10% 90% / 30% 70% 40% 60%;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -170px;
    z-index: 100;
  }
  .beard .left div:last-child{
    width: 120px;
    height: 40px;
    border-top: 2px #000 solid;
    border-radius: 10% 90% 10% 90% / 40% 60% 10% 90%;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -170px;
    z-index: 100;
  }

  .beard .right div:first-child{
    width: 120px;
    height: 40px;
    border-top: 2px #000 solid;
    border-radius: 90% 10% 90% 10% / 90% 10% 90% 10%;
    position: absolute;
    left: 50%;
    top: 140px;
    margin-left: 50px;
    z-index: 100;
  }
  .beard .right div:nth-child(2){
    width: 120px;
    height: 40px;
    border-top: 2px #000 solid;
    border-radius: 90% 10% 90% 10% / 70% 30% 60% 40%;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: 50px;
    z-index: 100;
  }
  .beard .right div:last-child{
    width: 120px;
    height: 40px;
    border-top: 2px #000 solid;
    border-radius: 90% 10% 90% 10% / 60% 40% 90% 10%;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: 50px;
    z-index: 100;
  }
  .beard span{
    display: block;
    width: 60px;
    height: 3.5px;
    background: #ffffff;
    border-radius: 4px;
    position: absolute;
    top: 352px;
    left: 50%;
    margin-left: -105px;
  }
</style>
