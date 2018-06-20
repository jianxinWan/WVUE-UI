<script>
  export default{
    data(){
      return {
        slides: [  // 图片的src,图片的超链接
          {
            src: 'http://139.199.104.60/ttms/img/register.jpg',
            href: 'http://139.199.104.60/ttms/img/register.jpg'
          },
          {
            src: 'http://139.199.104.60/ttms/img/register2.jpg',
            href: 'http://139.199.104.60/ttms/img/register.jpg'
          },
          {
            src: 'http://139.199.104.60/ttms/img/register3.jpg',
            href: 'http://139.199.104.60/ttms/img/register.jpg'
          }
        ],
        inv: 3000,
        styleObject: {
          width: '480px',
          height: '300px'
        },
        target: '_self'
      }
    }
  }
</script>

# Swiper(轮播图)
---
### 演示与使用
```w-swiper```是一个简单的轮播图组件，主要用于页面中图片的轮播，可以设置自动切换的速度，轮播图盒子的高度，轮播切换的效果，超链接打开的方式这几种类型，下面来查看具体演示和代码。
<div class="demo-block">
  <w-swiper :slides="slides" :inv="inv" :style="styleObject" transition="fade" :target="target">
  </w-swiper>
</div>

:::demo
```html
data(){
  return {
    slides: [  // 图片的src,图片的超链接
      {
        src: 'http://139.199.104.60/ttms/img/register.jpg',
        href: ''
      },
      {
        src: 'http://139.199.104.60/ttms/img/register2.jpg',
        href: ''
      },
      {
        src: 'http://139.199.104.60/ttms/img/register3.jpg',
        href: ''
      }
    ],
    inv: 3000,  // 图片自动切换速度
    styleObject: {
      width: '480px',
      height: '300px'
    },
    transitionName: 'fade',  // 轮播的方式,可选move(左右滑动效果),fade(淡入淡出效果)
    target: '_self' // 超链接打开的方式,默认为_blank
  }
}
//html
<w-swiper :slides="slides" :inv="inv" :style="styleObject" transition="fade" :target="target">
  </w-swiper>

```
:::

### 设置切换效果
---
我们通过设置```transition```属性的值来控制不同的切换效果，总共有效果，分别是```fade```淡入淡出和```move```左右切换,默认是```move```.

<div class="demo-block">
  <w-swiper :slides="slides" :inv="inv" :style="styleObject" target="target">
    </w-swiper>
</div>

:::demo
```html
<w-swiper :slides="slides" :inv="inv" :style="styleObject" target="target">
           </w-swiper>
```
:::

#### 其他设置
---
```style```属性接受一个```style```对象，我们设置轮播盒子的宽高，一般建议设置时和轮播照片的宽高比例匹配，保证照片的一个正常显示，超链接```target```有两个选项```_self```和```_blank```,默认是```_blank```，还有一个就是设置动画的切换时间```inv```这个一般可以自己设置，默认值是3000(毫秒)。

<div class="demo-block">
  <w-swiper :slides="slides" :inv=2000 :style="styleObject" transition="move"></w-swiper>
</div>

:::demo
```html
<w-swiper :slides="slides" :inv=2000 :style="styleObject"></w-swiper>
```
:::

### swiper参数
---

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| slides    | 轮播图片json数组 | Array  | ——                           | ——  |
| inv       | 轮播切换速度 | Number     | ——                           | 3000|
| transition| 切换效果 | String | fade/move | move |
| target   | 设置超链接跳转| String     | _self/_blank | _blank |
