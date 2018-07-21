<script>
  export default{
    methods:{
      getCutBlob:function(imgBlob){
        //子元素传给父元素的值，裁剪好的照片
        console.log(imgBlob);
      }
    }
  }
</script>

# uploadPhoto(上传头像)
---
### 基本用法与演示
```w-upload-p```实现照片的上传与裁剪功能，主要通过canvas对照片进行操作，将裁剪好的照片通过```Blob```形式传递给父组件，方便给后台发送与存储。，使用方法很简单，我们只需要指定标签名，并且设置回掉函数接收子组件传回给父组件的值即可。下面查看具体实现代码和演示。
<div class="demo-block">
  <div>
    <w-upload-p @img-cut-blob="getCutBlob" isCircle></w-upload-p>
  </div>
</div>

:::demo
```html
<div>
  <w-upload-p @img-cut-blob="getCutBlob"></w-upload-p>
</div>
<script>
  export default{
    methods:{
      getCutBlob:function(imgBlob){
        //子元素传给父元素的值，裁剪好的照片
        console.log(imgBlob);
      }
    }
  }
</script>
```
:::

### 其他样式设置
```待更新，主要解决手机端适配问题```
<div class="demo-block">
   <div>
      <w-upload-p @img-cut-blob="getCutBlob" isCircle></w-upload-p>
    </div>
</div>

::: demo
```html
```
:::
