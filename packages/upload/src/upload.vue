<template>
  <div class="upload-block">
    <div class="uploadBtn">
      <w-button v-if="disable" type="primary"><span>File</span><i class="w-icon-ascend"></i></w-button>
      <w-button v-else type="info" ><span>File</span><i class="w-icon-ascend"></i></w-button>
      <input type="file" accept="image/*" ref="file" style="display: none"/>
    </div>
    <div class="uploadInfo">
      <p class="fileList"><span>{{msg}}<i class="w-icon-close2"></i></span></p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'w-upload',
    data(){
      return {
        msg:'File1'
      }
    },
    props:{
      disable:{
        type:Boolean,
        defalut:false
      }
    },

  }
</script>

<style lang="less">
  @import '../../style/upload.less';
</style>
