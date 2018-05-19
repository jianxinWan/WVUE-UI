<template>
  <transition name="w-alert-fade" >
    <div class="w-alert-all" v-show="showAlert">
      <div class="w-alert-bg" v-show="showAlert" v-if="type !=='info'">
      </div>
      <div class="w-alert"
           :class="[
         'w-alert-'+type,
         'w-alert-size-'+size,
         {}
         ]"
           v-show="showAlert"
           :type="type"
      >
        <header>
          <!--<h2>{{this.type}}</h2>-->
          <slot name="alertHeader"><h2 v-if="type">{{this.type}}</h2></slot>
          <i class="w-icon-close fs-24" @click="close"></i>
        </header>
        <content>
          <slot></slot>
        </content>
        <footer v-show="type === 'confirm'" >
          <slot name="alertFooter" @click="close">
            <div v-show="type=='confirm'">
              <w-button type="info" @click="close" size="small">确定</w-button>
              <w-button type="primary" @click="close" size="small">取消</w-button>
            </div>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
  /* eslint-disable quotes,indent,key-spacing */
export default {
  name: "w-alert",
  props: {
    type:{
      type:String,
      default:"info"
    },
    size:{
      type:String,
      default:'medium'
    }
  },
  data () {
    return {
      msg:"弹窗",
      showAlert:false,
      time:3000
    }
  },
  mounted:function () {
    this.close();
  },
  methods: {
    close () {
      if(this.type === 'info'){
        console.log("type==info");
        let that = this;
        window.setTimeout(function () {
          that.showAlert = false;
          return
        },this.time);
      }
      this.showAlert = false;
    },
    show (){
      this.showAlert = true
    }
  }
}
</script>
<style lang="less">
  @import "../../style/alert.less";
</style>
