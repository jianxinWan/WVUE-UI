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
        let alertIcon = e.currentTarget.getAttribute("alertIcon");
        console.log(alertIcon);
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
        switch(alertIcon){
          case 'icon':
            this.$refs.icon.show();
            break;
          case 'picture':
            this.$refs.picture.show();
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
弹窗总共有```info```、```warning```、```confirm```三种类型，通过设定type来显示不同的类型，弹窗颜色和样式可以通过```color```来进行设定，我们设定显示按钮在指定函数```showAlert()```中进行配置，具体请看代码。如果你要设置弹框的头部信息在标签里面添加```<h2 slot="alertHeader">内容</h2>```这样你的弹窗头部会显示你需要的信息，如果不设置默认为type类型的值。
  * 注意一点:我们再给组件添加事件的时候需要这样写```@click.navite="info"```
<div class="demo-block" >
  <div>
    <WAlert center ref="info" type="info" size="small">
      <h2 slot="alertHeader">信息显示</h2>
      <h2>我要把bug全改完</h2>
    </WAlert>
    <WAlert center ref="warning" type="warning">
      <h2 slot="alertHeader">警告弹窗</h2>
      <h2>这是一条警告信息</h2>
    </WAlert>
    <WAlert center ref="comfirm" type="confirm">
      <h2 slot="alertHeader">是否确认？</h2>
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
      <WAlert center ref="info" type="info" size="small">
        <h2 slot="alertHeader">信息显示</h2>
        <h2>我要把bug全改完</h2>
      </WAlert>
      <WAlert center ref="warning" type="warning">
        <h2 slot="alertHeader">警告弹窗</h2>
        <h2>这是一条警告信息</h2>
      </WAlert>
      <WAlert center ref="comfirm" type="confirm">
        <h2 slot="alertHeader">是否确认？</h2>
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
   <WAlert center ref="icon" type="warning" size="small" >
    <h2 slot="alertHeader">我是弹窗的头部信息</h2>
    <i class="w-icon-smile"></i>
    <p>我是一个有icon的弹框，可能有点小</p>
  </WAlert>
  <WAlert center ref="picture" type="confirm" size="big" >
      <h2 slot="alertHeader">听说我很帅？</h2>
      <img src="../../static/img/avater.png"/>
      <img src="../../static/img/authorImg.jpg"/>
      <w-button slot="alertFooter" type="info" size="small">是的<i class="w-icon-smile"></button>
  </WAlert>
  <div>
    <w-button type="info" @click.native="showAlert" :alertIcon="'icon'" >显示有icon的弹窗</w-button>
    <w-button type="info" @click.native="showAlert" :alertIcon="'picture'">显示有图片的弹窗</w-button>
  </div>
</div>
</div>

::: demo
```html
```
:::
