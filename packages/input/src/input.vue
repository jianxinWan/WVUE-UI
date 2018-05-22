<template>
  <div class="w-input-box">
      <label class="input-box-name">
        <span>
          <slot name="labelIcon"></slot>
          <span>{{label}}:</span>
        </span>
      </label>
      <input
        class="text-input"
        type="text"
        :value="value"
        :maxlength="maxLen"
        @input="$emit('input',$event.target.value)"
        @keyup="regInspect"
        @focus="changeColor"
        @blur="recoverColor"
      >
    <span class="w-input-valid" v-show="inValid">invalid</span>
  </div>
</template>
<script>
  export default {
    name: 'w-input',
    props:{
      value:{
        type:String,
      },
      type:{
        type:String,
        default:"text"
      },
      label:{
        type:String,
      },
      check:{
        type:String,
        default:""
      },
      maxLen:{
        type:String,
        default:""
      }
    },
    data(){
      return{
        msg:'input',
        inValid:false
      }
    },
    methods:{
      changeColor:function(e){
        //获得焦点时，改变label标签和input的样式
        let inputBox = e.currentTarget.parentNode.firstChild;
        let allLabel = document.getElementsByClassName("input-box-name");
        for(let i = 0;i<allLabel.length;i++){
          allLabel[i].style="color:rgb(63, 83, 110);";
        }
        inputBox.style="color:#50BFFF";
      },
      recoverColor:function(e){
        //失去焦点时还原颜色
        let labelBox = e.currentTarget.parentNode.firstChild;
        labelBox.style = "color:#2c3e50"
      },
      regInspect:function(e){
        let regNum = /^[0-9]*$/;
        let regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        let regPhone=/^[1][3,4,5,7,8][0-9]{9}$/;
        let str = e.currentTarget.value;
        switch(this.check){
          case "email":
            if(!regEmail.test(str)){
              this.inValid = true;
            }else{
              this.inValid = false;
            }
            break;
          case "number":
            if(!regNum.test(str)){
              this.inValid = true;
            }else{
              this.inValid = false;
            }
            break;
          case "phone":
            if(!regPhone.test(str)){
              this.inValid = true;
            }else{
              this.inValid = false;
            }
          case "text":
            //不进行处理
            break;
        }
      },
    }
  }
</script>
<style lang="less">
  @import "../../style/input.less";
</style>
