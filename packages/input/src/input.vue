<template>
  <div class="w-input-box">
    <label class="input-box-name">{{label}}</label>
    <input
     class="text-input"
     type="text"
     ref="input-text"
     :value="value"
     @input="$emit('input',$event.target.value)"
     @focus="changeColor"
    >
    <span class="w-input-valid">Valid</span>
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
      }
    },
    methods:{
      changeColor:function(e){
        let inputBox = e.currentTarget.parentNode.firstChild;
        let allLabel = document.getElementsByClassName("input-box-name");
        for(let i = 0;i<allLabel.length;i++){
          allLabel[i].style="color:rgb(63, 83, 110);";
        }
        inputBox.style="color:#50BFFF";
      },
      checkEmail:function(str){

      },

    }
  }
</script>
<style lang="less">
  @import "../../style/input.less";
</style>
