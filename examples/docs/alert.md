<script>
  export default{
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
      showAlert(e){
        let alertType = e.currentTarget.getAttribute("alert");
        let alertSize = e.currentTarget.getAttribute("alertSize");
        console.log(alertSize);
        switch(alertType){
          case 'info':
            this.$refs.info.show();
            break;
          case 'warning':
            this.$refs.warning.show();
            break;
          case 'comfirm':
            this.$refs.comfirm.show();
            break;
        }
        switch(alertSize){
          case 'small':
            this.$refs.small.show();
            break;
          case 'medium':
            this.$refs.medium.show();
            break;
          case 'big':
            this.$refs.big.show();
            break;
        }
      }
    }
  }
</script>
# Alert 弹窗
----
用于页面中展示重要的提示信息。

### 基本用法
弹窗总共有```info```、```warning```、```confirm```三种类型，通过设定type来显示不同的类型，弹窗颜色和样式可以通过```color```来进行设定，我们设定显示按钮在指定函数```showAlert()```中进行配置，具体请看代码。
  * 注意一点:我们再给组件添加事件的时候需要这样写```@click.navite="info"```
<div class="demo-block" >
  <div>
    <WAlert center ref="info" type="info" size="small">
      <h2>我要把bug全改完</h2>
    </WAlert>
    <WAlert center ref="warning" type="warning">
      <h2>这是一条警告信息</h2>
    </WAlert>
    <WAlert center ref="comfirm" type="confirm">
      <h2>确定移除所有bug??</h2>
    </WAlert>
  </div>
  <div>
    <w-button type="info" @click.native="showAlert" :alert="'info'" >显示信息</w-button>
    <w-button type="warning" @click.native="showAlert" :alert="'warning'" >警告按钮</w-button>
    <w-button type="danger" @click.native="showAlert" :alert="'comfirm'" >confirm</w-button>
  </div>
</div>

::: demo
```html
  <div>
      <WAlert center ref="info" type="info">
        <h2>这里显示重要信息</h2>
      </WAlert>
      <WAlert center ref="warning" type="warning">
        <h2>这是一条警告信息</h2>
      </WAlert>
      <WAlert center ref="comfirm" type="confirm">
        <h2>确定移除所有bug??</h2>
      </WAlert>
    </div>
    <div>
      <w-button type="info" @click.native="showAlert" :alert="'info'" >显示信息</w-button>
      <w-button type="warning" @click.native="showAlert" :alert="'warning'" >警告按钮</w-button>
      <w-button type="danger" @click.native="showAlert" :alert="'comfirm'" >confirm</w-button>
    </div>
  <script>
    methods: {
      showAlert(e){
        let alertType = e.currentTarget.getAttribute("alert");
        switch(alertType){
          case 'info':
            this.$refs.info.show();
            break;
          case 'warning':
            this.$refs.warning.show();
            break;
          case 'comfirm':
            this.$refs.comfirm.show();
            break;
        }
      }
    }
  </script>
```
:::

### 弹框大小以及颜色
通过```size="size"```来设定样式的大小,```size```分为```small```、```medium```、```big```。注意```big```一般用于pc端，下面来看演示和具体操作方法
<div class="demo-block">
   <div>
      <WAlert center ref="small" type="warning" size="small">
        <h2>小型弹窗</h2>
      </WAlert>
      <WAlert center ref="medium" type="warning" size="medium">
        <h2>中型弹窗</h2>
      </WAlert>
      <WAlert center ref="big" type="warning" size="big">
        <h2>大型弹窗</h2>
      </WAlert>
    </div>
    <div>
      <w-button type="info" @click.native="showAlert" :alertSize="'small'" >小型弹窗</w-button>
      <w-button type="info" @click.native="showAlert" :alertSize="'medium'" >中型弹窗</w-button>
      <w-button type="info" @click.native="showAlert" :alertSize="'big'" >大型弹窗</w-button>
    </div>
</div>

::: demo
```html
div>
      <WAlert center ref="small" type="warning" size="small">
        <h2>小型弹窗</h2>
      </WAlert>
      <WAlert center ref="medium" type="warning" size="medium">
        <h2>中型弹窗</h2>
      </WAlert>
      <WAlert center ref="big" type="warning" size="big">
        <h2>大型弹窗</h2>
      </WAlert>
    </div>
    <div>
      <w-button type="info" @click.native="showAlert" :alertSize="'small'" >小型弹窗</w-button>
      <w-button type="info" @click.native="showAlert" :alertSize="'medium'" >中型弹窗</w-button>
      <w-button type="info" @click.native="showAlert" :alertSize="'big'" >大型弹窗</w-button>
    </div>
```
:::

### 添加有icon或者图片的的弹窗
可以在标签内部直接添加图片或者icon信息
<div class="demo-block">

</div>

::: demo
```html
```
:::
