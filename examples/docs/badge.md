# badge(徽标)
---
### 基本设置与演示
徽标```badge```通过```v-badge```属性添加，```v-badge```接收一个对象，我们可以设置```color```、```size```、```fontColor```、```value```这几个属性，```size```接收三个值```big```、```medium```、```small```、分别表示不同大小.
**建议：```small```比较小，一般不要设置value值，```big```一般与图标对应，这样设置能达到一个好的效果，```medium```为默认设置**
<div class="demo-block">
  <div>
    <div style="width:300px;display:flex;justify-content:space-between;">
      <i class="w-icon-my " style="font-size:40px;border:1px solid;color:rgba(63,170,245,1)"
      v-badge="{color:'rgba(63,170,245,1)',size:'small'}"></i>
        <i class="w-icon-message " style="font-size:40px;border:1px solid; color:rgba(19,206,102,1)" v-badge="{color:'rgba(19,206,102,1)',value:'3'}"></i>
        <i class="w-icon-feedback " style="font-size:40px;border:1px solid; color:rgba(247,186,42,1)" v-badge="{color:'rgba(247,186,42,1)',value:'4'}"></i>
        <i class="w-icon-delete " style="font-size:40px;border:1px solid;color:rgba(255,73,73,1)" v-badge="{color:'rgba(255,73,73,1)',size:'medium',value:'<i class=w-icon-fav></i>'}"></i>
    </div>
    <div style="border:1px solid #ccc;width:300px;height:200px;margin-top:20px;" v-badge="{color:'rgba(63,170,245,1)',value:'<i class=w-icon-smile></i>',size:'big'}">
      我是一个Div
    </div>
    <span v-badge="{color:'rgba(63,170,245,1)',size:'small'}">我是一个行内标签<span>
  </div>
</div>

:::demo
```html

<div>
  <div style="width:300px;display:flex;justify-content:space-between;">
    <i class="w-icon-my " style="font-size:40px;border:1px solid;color:rgba(63,170,245,1)"
    v-badge="{color:'rgba(63,170,245,1)',size:'small'}"></i>
      <i class="w-icon-message " style="font-size:40px;border:1px solid; color:rgba(19,206,102,1)" v-badge="{color:'rgba(19,206,102,1)',value:'3'}"></i>
      <i class="w-icon-feedback " style="font-size:40px;border:1px solid; color:rgba(247,186,42,1)" v-badge="{color:'rgba(247,186,42,1)',value:'4'}"></i>
      <i class="w-icon-delete " style="font-size:40px;border:1px solid;color:rgba(255,73,73,1)" v-badge="{color:'rgba(255,73,73,1)',size:'medium',value:'<i class=w-icon-fav></i>'}"></i>
  </div>
  <div style="border:1px solid #ccc;width:300px;height:200px;margin-top:20px;" v-badge="{color:'rgba(63,170,245,1)',value:'<i class=w-icon-smile></i>',size:'big'}">
    我是一个Div
  </div>
  <span v-badge="{color:'rgba(63,170,245,1)',size:'small'}">我是一个行内标签<span>
</div>

```
:::

### Attributes

|参数      |说明      |类型      |可选值   |默认值    |
|----------|----------|----------|---------|----------|
|color     |设置徽标的背景色|String|自定义|自定义|
|size      |设置徽标的大小|String|small/medium/big|medium|
|value     |指定徽标的值|String|————|————|
|fontColor |指定徽标的字体颜色|String|自定义|自定义|
