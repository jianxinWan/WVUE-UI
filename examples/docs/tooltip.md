# Tooltip(提示框)
---
### 基础功能与演示
```v-tooltip```提示框写成指令形式，比组件使用起来更方便一些，```tooltip```需要指定```site```属性，可选值有```top```、```bottom```、```left```、```right```四个值，默认值为```bottom```显示在目标元素的下方。同样我们可以指定提示框的颜色，我们需要指定```color```、```fontColor```的值，这些都可以自定义选择，```color```的默认值是灰色，```fontColor```的默认是是白色，具体请看演示和实现代码。
**注意：对于段落，行内元素使用```v-tooltip```属性时，一般建议用盒子将这些元素包起来，在外部的盒子上方使用指令，这样展现的效果能更好一些**
<div class="demo-block">
  <style>
     .tooltipShow{
       position:relative;
       width:400px;
       height:300px;
       border:1px solid #ccc;
     }
     .tooltipCol{
        position:absolute;
        width:auto;
        height:100%;
        display:flex;
        left:50%;
        margin-left:-55px;
        flex-direction:column;
        justify-content:space-around;
     }
     .tooltipRow{
        position:absolute;
        width:100%;
        top:42%;
        height:auto;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
     }
     .text-show{
        margin:50px 0;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
     }
  </style>
  <div class="tooltipShow">
    <div class="tooltipCol">
      <w-button class="btn-top" type="info" v-tooltip = "{site:'top',msg:'我在上面你点不到我',color:'rgba(63,170,245,0.8)'}">显示在上面</w-button>
      <w-button class="btn-bottom" type="success" v-tooltip = "{msg:'我在下面你还是点不到我',color:'rgba(19,206,102,1)'}">显示在下面</w-button>
    </div>
    <div class="tooltipRow">
      <w-button class="btn-left" type="warning" v-tooltip = "{site:'left',msg:'我在左边',color:'rgba(247,186,42,0.8)'}">显示在左面</w-button>
      <w-button class="btn-right" type="danger" v-tooltip = "{site:'right',msg:'我在右边',color:'rgba(255,73,73,0.8)'}">显示在右面</w-button>
    </div>
  </div>
  <div class='text-show'>
   <div v-tooltip="{site:'bottom',msg:'完了，跟不上了',color:'rgba(63,170,245,0.8)'}">
     听说ES9出来了
   </div>
   <div v-tooltip="{site:'top',msg:'完了，跟不上了',color:'rgba(63,170,245,0.8)'}">
     听说ES9出来了
   </div>
    <div v-tooltip="{site:'top',msg:'我也是这样认为的'}">
      javascriptIsBest
    </div>
  </div>
</div>

:::demo
```html

<style>
     .tooltipShow{
       position:relative;
       width:400px;
       height:300px;
       border:1px solid #ccc;
     }
     .tooltipCol{
        position:absolute;
        width:auto;
        height:100%;
        display:flex;
        left:50%;
        margin-left:-55px;
        flex-direction:column;
        justify-content:space-around;
     }
     .tooltipRow{
        position:absolute;
        width:100%;
        top:42%;
        height:auto;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
     }
     .text-show{
        margin:50px 0;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
     }
  </style>
  <div class="tooltipShow">
    <div class="tooltipCol">
      <w-button class="btn-top" type="info" v-tooltip = "{site:'top',msg:'我在上面你点不到我',color:'rgba(63,170,245,0.8)'}">显示在上面</w-button>
      <w-button class="btn-bottom" type="success" v-tooltip = "{msg:'我在下面你还是点不到我',color:'rgba(19,206,102,1)'}">显示在下面</w-button>
    </div>
    <div class="tooltipRow">
      <w-button class="btn-left" type="warning" v-tooltip = "{site:'left',msg:'我在左边',color:'rgba(247,186,42,0.8)'}">显示在左面</w-button>
      <w-button class="btn-right" type="danger" v-tooltip = "{site:'right',msg:'我在右边',color:'rgba(255,73,73,0.8)'}">显示在右面</w-button>
    </div>
  </div>
  <div class='text-show'>
    <div v-tooltip="{site:'bottom',msg:'完了，跟不上了',color:'rgba(63,170,245,0.8)'}">
      听说ES9出来了
    </div>
    <div v-tooltip="{site:'top',msg:'完了，跟不上了',color:'rgba(63,170,245,0.8)'}">
      听说ES9出来了
    </div>
    <div v-tooltip="{site:'top',msg:'我也是这样认为的'}">
      javascriptIsBest
    </div>
  </div>

```
:::

### Attributes

|参数|说明|类型|可选值|默认值|
|----------|----------|----------|----------|----------|
|site|提示框显示的位置|String|top/bottom/left/right|bottom|
|msg|提示框的提示信息|String|————|————|
|color|提示框的背景色|String|自定义|自定义|
|fontColor|提示框的字体颜色|String|自定义|自定义|
