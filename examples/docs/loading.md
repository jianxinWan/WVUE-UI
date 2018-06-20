<script>
  export default{
    data(){
      return {
        colorArrayInfo:
          [
           {color:'#62D926'},
           {color:'#62D926'},
           {color:'rgba(255,73,73,1)'},
           {color:'rgba(255,73,73,1)'}
        ],
        showCvsFlag:false
      }
    },
    methods:{
      getCvs:function(){
        this.showCvsFlag = true;
        setTimeout(function(){
          this.showCvsFlag = false;
        }.bind(this),3000);
      }
    },
    mounted:function(){

    }
  }
</script>
# Loading(局部)
---
### 基本用法
```w-loading```组件是通过```canvas```实现的一个```Loading```特效,并且可以设置```颜色```、```大小```、```旋转速度```，```粗细```、```旋转效果```，```是否全屏```等。我们来看一下默认效果。
<div class="demo-block">
  <div style="width:100%;height:400px;">
    <w-loading ></w-loading>
  </div>
</div>

:::demo
```
<div style="width:100%;height:400px;">
  <div style="width:100%;height:400px;">
      <w-loading ></w-loading>
    </div>
</div>
```
:::

### 设置颜色和其他参数
```Loading```中的颜色需要设置四个，即每个小部分的颜色，我们通过传给```color-array```属性传递一个包含四个颜色的数组即可，其他的设置包括粗细程度，```loading```的背景颜色等，详细信息请参考属性表和示例代码，大概说下改变样式的范围我们设置```add-redius```，值小于15为第一种效果，大于15为第二种示例结果。
<br/>
**注意:除字符串的传值之外其他的属性在传值的时候属性前都必须添加 ```:```**
<div class="demo-block">
  <w-loading :color-array="colorArrayInfo" add-redius="40" thickness="40" speed-and-size="40" bg-color="rgba(240,240,240,0.6)"></w-loading>
</div>

:::demo
```html
  <w-loading :color-array="colorArrayInfo" add-redius="40" thickness="40" speed-and-size="40" ></w-loading>
  export default{
    data(){
      return {
        colorArrayInfo:
        [
          {color:'#62D926'},
          {color:'#62D926'},
          {color:'rgba(255,73,73,1)'},
          {color:'rgba(255,73,73,1)'}
        ]
      }
    }，
    methods:{
    }
  }
```
:::


### 是否全屏显示
通过设置allScreen来规定这个loading效果是不是全屏，我们假设用定时器来模拟异步请求，具体请看代码。
<div class="demo-block">
  <div>
    <w-button type="info" @click="getCvs">显示loading</w-button>
    <div v-if="showCvsFlag">
      <w-loading all-screen><w-loading>
    </div>
  </div>
</div>

:::demo
```html
<div>
  <w-button type="info" @click="getCvs">显示loading</w-button>
  <div v-if="showCvsFlag">
    <w-loading all-screen><w-loading>
  </div>
</div>
<script>
  export default{
    data(){
      return {
        showCvsFlag:false
      }
    },
    methods:{
      getCvs:function(){
        this.showCvsFlag = true;
        setTimeout(function(){
          this.showCvsFlag = false;
        }.bind(this),3000);
      }
    },
    mounted:function(){

    }
  }
</script>
```
:::


### LoadingBar参数
---

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| bg-color  | 背景颜色       | String   | -                                | white   |
| color-array | 每一小部分的颜色 | Array| -                                | 如图所示|
| all-screen  | 是全屏否 | Boolean | true/false | false |
| thickness   | 设置粗细程度| Number    | 0-100 | 40 |
| canvasSize   | 设置画布大小| Number    | 200-350 | 350 |
| speedAndSize   | 设置旋转速度| Number    | 0-100 | 40 |
| addRedius   | 旋转样式| Number    | 0-40(15为分界线) | 15 |


