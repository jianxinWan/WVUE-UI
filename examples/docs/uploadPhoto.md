<script>
  export default{
    data(){
      return {
        fileNameList:[],
        file:{},
        files:{}
      }
    },
    methods: {
      uploadOneCallback:function(value){
        console.log("我是单个文件父元素接收到的值");
        console.log(value);
        if(value){
          this.fileNameList = value;
        }else{
          this.fileNameList = [];
        }
      },
      uploadManyCallback:function(value){
        console.log("我是多个文件父元素接收到的值");
        console.log(value);
        if(value.length != 0){
          this.fileNameList = value;
        }else{
          console.log("未选择文件");
          this.fileNameList = [];
        }
      }
    }
  }
</script>

# uploadPhoto(上传头像)
---
<div class="demo-block">
  <w-upload v-model="file" @change="uploadOneCallback"></w-upload>
</div>

:::demo
```html

```
:::
