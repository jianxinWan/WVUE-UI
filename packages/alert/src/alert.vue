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
          <h2>{{this.type}}</h2>
          <i class="w-icon-close fs-24" @click="close"></i>
        </header>
        <content>
          <slot></slot>
        </content>
        <footer v-show="type === 'confirm'" >
          <w-button type="info" @click="close">确定</w-button>
          <w-button type="primary" @click="close">取消</w-button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
  /* eslint-disable quotes,indent,key-spacing */
export default {
  name: "WAlert",
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
      showAlert:false
    }
  },
  computed:{
  },
  methods: {
    close () {
      this.showAlert = false
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
