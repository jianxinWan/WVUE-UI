# wave(波纹)
---
```w-wave```是一个波浪的一个效果，我们在使用时在指定div上添加```w-wave```属性既可.```w-wave```接收一个参数，具体是一个颜色得值，``` <w-button type="info" w-wave="{color:'purple'}" broad>button</w-button>```这样，我们就添加了一个紫色得波浪效果。我们也可以给其他元素添加```w-wave```属性，具体请查看演示和代码。
<div class="demo-block">
  <div>
    <h3>按钮元素</h3>
    <w-button type="info" v-wave="{color:'purple'}" broad>button</w-button>
    <w-button type="success" v-wave="{color:'rgba(63,170,245,1)'}" broad>button</w-button>
    <w-button type="danger" v-wave="{color:'rgba(19,206,102,1)'}" broad>button</w-button>
    <w-button type="warning" v-wave="{color:'rgba(255,73,73,1)'}" broad>button</w-button>
    <w-button  v-wave broad>button</w-button>
    <h3>其他元素</h3>
    <div style="width:300px;height:80px;border:1px solid rgba(63,170,245,1);" v-wave>这是一个div</div>
  <div>
</div>

:::demo
```html
<div>
  <h3>按钮元素</h3>
  <w-button type="info" v-wave="{color:'purple'}" broad>button</w-button>
  <w-button type="success" v-wave="{color:'rgba(63,170,245,1)'}" broad>button</w-button>
  <w-button type="danger" v-wave="{color:'rgba(19,206,102,1)'}" broad>button</w-button>
  <w-button type="warning" v-wave="{color:'rgba(255,73,73,1)'}" broad>button</w-button>
  <w-button  v-wave broad>button</w-button>
  <h3>其他元素</h3>
  <div style="width:300px;height:80px;border:1px solid rgba(63,170,245,1);" v-wave>这是一个div</div>
<div>
```
:::


### Attributes

| 参数      | 说明   | 类型      | 可选值       | 默认值   |
|---------- |-------- |----------|------------- |--------  |
| w-wave    |是否添加波纹| String| 所有的颜色   | #2196f3  |
