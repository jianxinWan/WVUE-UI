# Button 按钮
----
### 基础用法
使用```type```、```general```、```round```和```broad```属性来定义 Button 的样式。

<div class="demo-block">
  <div class="m-10">
    <w-button>默认按钮</w-button>
    <w-button>主要按钮</w-button>
    <w-button type="success">成功按钮</w-button>
    <w-button type="info">信息按钮</w-button>
    <w-button type="warning">警告按钮</w-button>
    <w-button type="danger">危险按钮</w-button>
  </div>
  <div class="m-10">
    <w-button plain>朴素按钮</w-button>
    <w-button type="primary" general>主要按钮</w-button>
    <w-button type="success" general>成功按钮</w-button>
    <w-button type="info" general>信息按钮</w-button>
    <w-button type="warning" general>警告按钮</w-button>
    <w-button type="danger" general>危险按钮</w-button>
  </div>
  <div class="m-10">
    <w-button round>圆形按钮</w-button>
    <w-button type="primary" round>主要按钮</w-button>
    <w-button type="success" round>成功按钮</w-button>
    <w-button type="info" round>信息按钮</w-button>
    <w-button type="warning" round>警告按钮</w-button>
    <w-button type="danger" round>危险按钮</w-button>
  </div>
  <div class="m-10 child-lineHeight">
      <w-button broad>长条按钮</w-button>
      <w-button type="primary" broad>主要按钮</w-button>
      <w-button type="success" broad>成功按钮</w-button>
      <w-button type="info" broad>信息按钮</w-button>
      <w-button type="warning" broad>警告按钮</w-button>
      <w-button type="danger" broad>危险按钮</w-button>
  </div>
</div>

::: demo
```html

<div>
  <w-button>默认按钮</w-button>
  <w-button type="primary">主要按钮</w-button>
  <w-button type="success">成功按钮</w-button>
  <w-button type="info">信息按钮</w-button>
  <w-button type="warning">警告按钮</w-button>
  <w-button type="danger">危险按钮</w-button>
</div>
<div>
  <w-button plain>朴素按钮</w-button>
  <w-button type="primary" plain>主要按钮</w-button>
  <w-button type="success" plain>成功按钮</w-button>
  <w-button type="info" plain>信息按钮</w-button>
  <w-button type="warning" plain>警告按钮</w-button>
  <w-button type="danger" plain>危险按钮</w-button>
</div>
<div>
  <w-button round>圆形按钮</w-button>
  <w-button type="primary" round>主要按钮</w-button>
  <w-button type="success" round>成功按钮</w-button>
  <w-button type="info" round>信息按钮</w-button>
  <w-button type="warning" round>警告按钮</w-button>
  <w-button type="danger" round>危险按钮</w-button>
</div>

<div>
    <w-button broad>长条按钮</w-button>
    <w-button type="primary" broad>主要按钮</w-button>
    <w-button type="success" broad>成功按钮</w-button>
    <w-button type="info" broad>信息按钮</w-button>
    <w-button type="warning" broad>警告按钮</w-button>
    <w-button type="danger" broad>危险按钮</w-button>
</div>

```
:::
### 禁用状态
使用```disable```来设定按钮是否处于禁用状态。
<div class="demo-block">
  <div class="m-10">
    <w-button disabled>圆形按钮</w-button>
    <w-button type="primary" disabled>主要按钮</w-button>
    <w-button type="success" disabled>成功按钮</w-button>
    <w-button type="info" disabled>信息按钮</w-button>
    <w-button type="warning" disabled>警告按钮</w-button>
    <w-button type="danger" disabled>危险按钮</w-button>
  </div>
</div>


::: demo
```html
<div>
  <w-button disabled>圆形按钮</w-button>
  <w-button type="primary" disabled>主要按钮</w-button>
  <w-button type="success" disabled>成功按钮</w-button>
  <w-button type="info"  disabled>信息按钮</w-button>
  <w-button type="warning" disabled>警告按钮</w-button>
  <w-button type="danger"  disabled>危险按钮</w-button>
</div>

```
:::

### 设置按钮大小
我们通过添加不同```size```值来改变button的大小，我们可以设置的size的大小有```small```、```medium```、```big```以及宽按钮```broad```，如果不设置,默认为中型按钮```dedium```,下面我们来看演示实例。
<div class="demo-block">
  <div class="m-10">
    <w-button size="small" type="info">小型按钮</w-button>
    <w-button size="medium" type="info">中型按钮</w-button>
    <w-button size="big" type="info">大型按钮</w-button>
    <w-button broad type="info">长条按钮</w-button>
  </div>
</div>

::: demo
```html
<div>
  <w-button size="small" type="info">小型按钮</w-button>
  <w-button size="medium" type="info">中型按钮</w-button>
  <w-button size="big" type="info">大型按钮</w-button>
  <w-button broad type="info">长条按钮</w-button>
</div>
```
:::

### 带有icon的按钮
带有icon的按钮可以不通过显示文字来向用户传递信息，这样可以节省很多空间，我们通过添加```icon="图标名称"```,图标名称具体点击图标详情页。
<div class="demo-block">
  <div class="m-10">
    <w-button icon="w-icon-tag" type="info"></w-button>
      <w-button icon="w-icon-close" type="info"></w-button>
      <w-button icon="w-icon-smile" type="info"></w-button>
      <w-button icon="w-icon-search" type="info">搜索</w-button>
      <w-button icon="w-icon-cloudfill" type="info">下载</w-button>
  </div>
</div>

::: demo
```html
<div>
  <w-button icon="w-icon-tag" type="info"></w-button>
  <w-button icon="w-icon-close" type="info"></w-button>
  <w-button icon="w-icon-smile" type="info"></w-button>
  <w-button icon="w-icon-search" type="info">搜索</w-button>
  <w-button icon="w-icon-cloudfill" type="info">下载</w-button>
</div>
```
:::

### Attributes

| 参数      | 说明   | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size      | 尺寸    | string    |small,medium,big |    medium    |
| type      | 类型   | string     |primary,success,warning,danger,info |     —    |
| general   | 是否为简单按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
