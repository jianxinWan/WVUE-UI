<template>
  <div class="upload-photo-warp">
    <div class="showPicture">
      <img :src="imgUrl" class="imgFile" alt="上传的照片" />
    </div>
    <div class="upload-btn-warp">
      <w-button type="info" class="upload-btn" broad>
        上传头像
        <input ref="uploadImg" type="file" class="upload-input" id="upload-img" accept="image/*"/>
      </w-button>
    </div>
    <div class="showClipArea" v-show="selectImg">
      <div class="centerArea">
        <canvas id="c1"></canvas>
        <div class="mark" id="mark" @mousedown="mouseDown"></div>
        <canvas id="c3"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'w-upload-p',
  data(){
    return {
      imgUrl:"http://139.199.104.60/wvue/static/img/authorImg.c926744.jpg",
      selectImg:false,
      relaX:"",
      relaY:"",
      imgStyle:{
        width:"",
        height:""
      }
    }
  },
  props:{
    isCircle:{
      type:Boolean,
      default:false
    }
  },
  mounted:function(){
    let ouloadImg = document.getElementById('upload-img');
    ouloadImg.addEventListener('change',function(){
      this.showImg();
    }.bind(this),false);
  },
  methods:{
    getObjectUrl:function(file){
      let url = null;
      if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
      } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
      } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url ;
    },
    showImg:function() {
      this.imgUrl = this.getObjectUrl(this.$refs.uploadImg.files[0]);
      if (this.imgUrl) {
        document.getElementsByClassName('imgFile')[0].setAttribute('src', this.imgUrl);
        this.selectImg = true;
        this.$nextTick(function(){
          let imgHeight = document.getElementsByClassName("imgFile")[0].height;
          let imgWidth = document.getElementsByClassName("imgFile")[0].width;
          console.log(imgHeight,imgWidth);
          this.changeWidth(imgHeight);
          this.showClip();
        }.bind(this));
      }
    },
    changeWidth:function(height){
      if(height<=200){
        this.imgStyle.height = 300;
        this.imgStyle.width = 300*(200/height);
        console.log(this.imgStyle.height,this.imgStyle.width);
      }else{
        this.imgStyle.width = 300;
        this.imgStyle.height = height*1.5;
      }
    },
    showClip:function(){
      let canvas1 = document.getElementById("c1");
      let canvas3= document.getElementById("c3");
      console.log(this.imgStyle.height,this.imgStyle.width);
      canvas1.height = this.imgStyle.height;
      canvas1.width = this.imgStyle.width;
      canvas3.height=200;
      canvas3.width=200;
    },
    mouseDown:function(event){
      let ev = event || window.event;
      this.relaX = ev.clientX - ev.target.offsetLeft;
      this.relaY = ev.clientY - ev.target.offsetTop;
      let target = event.target;
      target.onmousemove = function(ev){
        let canvas1 = document.getElementById("c1");
        let oMark = document.getElementById("mark");
        let canvas3= document.getElementById("c3");
        ev = ev || window.event;
        let left = ev.clientX - this.relaX;
        let top = ev.clientY - this.relaY;
        //限制移动区域
        left = left<=0 ? 0 : left;
        top = top <=0 ? 0:top;
        let leftMax = canvas1.offsetWidth - oMark.offsetWidth;
        let topMax = canvas1.offsetHeight -oMark.offsetHeight;
        left =left>=leftMax?leftMax:left;
        top =top>=topMax?topMax:top;
        oMark.style.left = left + 'px';
        oMark.style.top = top + 'px';
        let cxt1 = canvas1.getContext("2d");
        let img = new Image();
        img.src = this.imgUrl;
        let srcX = oMark.offsetLeft;
        let srcY = oMark.offsetTop;
        console.log(canvas1.getBoundingClientRect().left,canvas1.getBoundingClientRect().top);
        let sWidth = oMark.offsetWidth;
        let sHeight = oMark.offsetHeight;
        let canvas2 = document.createElement("canvas");
        let cxt2=canvas2.getContext("2d");
        img.onload = function(){
          cxt1.drawImage(img,0,0,canvas1.width,canvas1.height);
          let dataImg = cxt1.getImageData(srcX,srcY,sWidth,sHeight);
          canvas2.width = sWidth;
          canvas2.height = sHeight;
          cxt2.putImageData(dataImg,0,0,0,0,canvas2.width,canvas2.height);
          let img2 = canvas2.toDataURL("image/png");
          let cxt3=canvas3.getContext("2d");
          let img3 = new Image();
          img3.src = img2;
          img3.onload  = function(){
            cxt3.drawImage(img3,0,0,canvas3.width,canvas3.height)
          }
        }
      }.bind(this);
      target.onmouseup = function () {
        target.onmousemove = null;
        target.onmouseup = null;
      }
    },
    mouseMove:function(ev){
      console.log("哈哈哈哈！");
    },
    mouseUp:function(){

    }
  }
}
</script>

<style lang="less">
  @import "../../style/uploadPhoto.less";
</style>
