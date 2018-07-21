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
        <div class="control-warp">
          <div class="close-btn" @click="closeFun">
            <i class="w-icon-close2"></i>
          </div>
          <div class="canvas-and-mark">
            <canvas id="c1"></canvas>
            <div class="mark" id="mark" @mousedown="mouseDown" @mousewheel.prevent.stop="rollImg"></div>
            <canvas id="c3"></canvas>
          </div>
          <div class="submitAndInfo">
            <p><b>提示:</b>鼠标移动到方块上，滑动滚轮调整所选区域</p>
            <div class="control-button">
              <w-button type="success" @click="confirmCut">确认裁剪</w-button>
              <w-button type="primary" @click="closeFun">放弃裁剪</w-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'w-upload-p',
  data(){
    return {
      imgUrl:"http://139.199.104.60/wvue/static/img/imgDefault.jpg",
      selectImg:false,
      relaX:"",
      relaY:"",
      imgStyle:{
        width:"",
        height:""
      },
      finishCutImgUrl:""
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
    showImg:function() {
      if (!this.$refs.uploadImg.files[0]) {
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(this.$refs.uploadImg.files[0]);
      reader.onload =function(evt) {
        setTimeout(function(){
          document.getElementsByClassName('imgFile')[0].src = evt.target.result;
          setTimeout(function(){
            let imgHeight = document.getElementsByClassName('imgFile')[0].offsetHeight;
            this.selectImg = true;
            this.imgUrl = evt.target.result;
            this.changeWidth(imgHeight);
            this.showClip();
            this.showImage();
          }.bind(this))
        }.bind(this),0);
      }.bind(this);
    },
    closeFun:function(){
      this.selectImg = false;
      this.imgUrl = "http://139.199.104.60/wvue/static/img/imgDefault.jpg";
    },
    confirmCut:function(){
      if(this.finishCutImgUrl){
        document.getElementsByClassName('imgFile')[0].src = this.finishCutImgUrl;
        this.selectImg = false;
        this.$emit('img-cut-blob',this.finishCutImgUrl);
      }else{
        alert("裁剪失败，请重新调整！");
      }
    },
    changeWidth:function(height){
      if(height<=200){
        this.imgStyle.height = 300;
        this.imgStyle.width = 300*(200/height);
      }else{
        this.imgStyle.width = 300;
        this.imgStyle.height = height*1.5;
      }
    },
    rollImg:function(e){
      let pxAdd=parseInt(e.wheelDelta/15);
      if(e.target.offsetHeight+pxAdd>300){
        e.target.style.width=e.target.style.height = 300 +'px';
      }else{
        e.target.style.width=e.target.style.height=e.target.offsetHeight-2+pxAdd+'px';
      }
    },
    showClip:function(){
      let canvas1 = document.getElementById("c1");
      let canvas3= document.getElementById("c3");
      canvas1.height = this.imgStyle.height;
      canvas1.width = this.imgStyle.width;
      canvas3.height=250;
      canvas3.width=250;
    },
    showImage:function(){
      let canvas1 = document.getElementById("c1");
      let oMark = document.getElementById("mark");
      let canvas3= document.getElementById("c3");
      let cxt1 = canvas1.getContext("2d");
      let img = new Image();
      img.src = this.imgUrl;
      let srcX = oMark.offsetLeft;
      let srcY = oMark.offsetTop;
      let sWidth = oMark.offsetWidth;
      let sHeight = oMark.offsetHeight;
      let canvas2 = document.createElement("canvas");
      let cxt2=canvas2.getContext("2d");
      img.onload = function(){
        if(sWidth == 0){
          sWidth = sHeight = 250;
        }
        cxt1.drawImage(img,0,0,canvas1.width,canvas1.height);
        let dataImg = cxt1.getImageData(srcX,srcY,sWidth,sHeight);
        canvas2.width = sWidth;
        canvas2.height = sHeight;
        cxt2.putImageData(dataImg,0,0,0,0,canvas2.width,canvas2.height);
        let img2 = canvas2.toDataURL("image/png");
        let cxt3=canvas3.getContext("2d");
        let img3 = new Image();
        img3.src = img2;
        this.finishCutImgUrl = img2;
        img3.onload  = function(){
          cxt3.drawImage(img3,0,0,canvas3.width,canvas3.height);
        }
      }.bind(this);
    },
    mouseDown:function(event){
      let ev = event || window.event;
      this.relaX = ev.clientX - ev.target.offsetLeft;
      this.relaY = ev.clientY - ev.target.offsetTop;
      document.onmousemove = function(ev){
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
          this.finishCutImgUrl = img2;
          let cxt3=canvas3.getContext("2d");
          let img3 = new Image();
          img3.src = img2;
          img3.onload  = function(){
            cxt3.drawImage(img3,0,0,canvas3.width,canvas3.height)
          }
        }.bind(this);
      }.bind(this);
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  }
}
</script>

<style lang="less">
  @import "../../style/uploadPhoto.less";
</style>
