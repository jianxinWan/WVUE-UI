<script>
  export default{
    data(){
      return {
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

# upload(上传文件)
----
### 通过设置```multiple```属性设置上传一个或者多个文件
#### 上传一个文件
<div class="demo-block">
  <w-upload v-model="file" @change="uploadOneCallback"></w-upload>
</div>

::: demo
```html
export default{
  data(){
    return {
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
//html部分
<w-upload v-model="file" @change="uploadOneCallback"></w-upload>
```
:::

#### 上传多个文件
<div class="demo-block">
  <w-upload v-model="files" multiple @change="uploadManyCallback"></w-upload>
</div>

::: demo
```html
//js同上
//html部分
<w-upload v-model="files" multiple @change="uploadManyCallback"></w-upload>
```
:::

### 通过设置```disable```来设置禁止上传文件
<div class="demo-block">
  <div style="width:300px">
    <w-upload multiple disable></w-upload>
  </div>
</div>

::: demo
```html
```
:::

### 限定上传文件大小
后续添加

### Attributes

| 参数      | 说明   | 类型      | 可选值       | 默认值   |
|---------- |-------- |----------|------------- |--------  |
| multiple  |设定是否多选| Boolean| true/false  |  false   |
| disable   |是否禁止上传| Boolean| true/false  |  false   |
