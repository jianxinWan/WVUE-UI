<template>
  <div class="upload-block">
    <div class="uploadBtn">
      <w-button v-if="disable" type="primary" class="disable-btn">
        <span>File</span>
        <i class="w-icon-ascend"></i>
      </w-button>
      <w-button v-else type="info" class="btn">
        <span>File</span>
        <i class="w-icon-ascend"></i>
      </w-button>
      <input v-show="!this.disable" type="file" :multiple="multiple" accept="image/*" ref="file" class="upload-input" />
    </div>
    <div class="uploadInfo" :class="showDisableStyle">
      <p class="fileList">
        <span class="placeholder-info" v-show="this.fileNameList.length==0 &&!this.disable&&!this.multiple">请选择一个文件</span>
        <span class="placeholder-info" v-show="this.fileNameList.length==0 &&!this.disable&&this.multiple">请选择一个或多个文件</span>
        <span class="placeholder-info-disable" v-show="this.disable">不能上传文件</span>
        <span class="file-name-block" v-for="(item,index) in fileNameList" :key="index">{{item.name}}
          <i class="w-icon-close2" @click="removeFile(index)"></i>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'w-upload',
    data () {
      return {
        msg: 'File1',
        fileNameList: [],
        active: false
      }
    },
    computed: {
      // 显示不同的文件列表底部样式
      showDisableStyle: function () {
        return {
          'upload-disable': this.disable,
          'uploadInfo': !this.disable
        }
      }
    },
    props: {
      disable: Boolean,
      multiple: Boolean,
      value: [Object, FileList, '']
    },
    mounted () {
      const vm = this
      this.$refs.file.onchange = function () {
        vm.$emit('change', this.files)
        if (this.files.length) {
          if (vm.multiple) {
            for (let i = 0; i < this.files.length; i++) {
              vm.fileNameList.push(this.files[i])
            }
          } else {
            vm.fileNameList = []// 先将数组置空
            vm.fileNameList.push(this.files[0])
          }
        }
      }
    },
    methods: {
      removeFile: function (id) {
        this.fileNameList.splice(id, 1)
        this.$emit('change', this.fileNameList)
      }
    }
  }
</script>

<style lang="less">
  @import './upload.less';
</style>
