<script>
  import Vue from 'vue'
  Vue.component('first',{
    data(){
      return{
        name:"origin",
        phone:"18788888888",
        address:"西安邮电大学",
        email:"1158810459@qq.com",
        elseInput:"只能输入数字"
      }
    },
    template : `<div>
    <w-input label="Name" check="text" v-model="name">
        <i class="w-icon-my" slot="labelIcon"></i>
      </w-input>
      <w-input label="Address" check="text" v-model="address">
        <i class="w-icon-lbsfill" slot="labelIcon"></i>
      </w-input>
      <w-input label="Phone" check="phone" v-model="phone">
        <i class="w-icon-mobile" slot="labelIcon"></i>
      </w-input>
      <w-input label="Email" check="email" v-model="email">
        <i class="w-icon-feedback" slot="labelIcon"></i>
      </w-input>
    </div>`
  });
  Vue.component('second',{
    template : `<div>
      <d-cartoon></d-cartoon>
    </div>`
  })
  Vue.component('third',{
  template : '<div>333333content</div>'
  })
  Vue.component('forth',{
    template : `<div>
    <w-button type='info'>Dolary</w-button>
    <w-button type='danger'>origin</w-button>
    </div>`
  })
  Vue.component('fifth',{
    template : '<w-loading>555555content</w-loading>'
  })
  export default {
    data(){
      return {
        tabList:[
          {
            title:"Form表单",
            tabName:"first"
          },
          {
            title:"Button按钮",
            tabName:"forth"
          },
          {
            title:"Loading",
            tabName:"fifth"
          },
          {
            title:"dolary",
            tabName:"second"
          },
          {
            title:"33333",
            tabName:"third"
          },
        ]
      }
    }
  }
</script>

# Tabs(标签页)
---
### 基本使用方法
```w-tabs```实现一个标签页的切换效果，```w-tabs```接收两个参数```tabList```和```tabCut```,```tabList```接收一个json数组对象，每一项包含```{   title:"dolary",tabName:"second"}```、```tabName```的值是我们需要与title对应的组件名。
<div class="demo-block">
  <w-tabs :tab-list="tabList" tab-cut="move">
  </w-tabs>
</div>

:::demo
```html
import Vue from 'vue'
  Vue.component('first',{
    template :``,
    data(){
      return{
      }
    }
  });
  Vue.component('second',{
    template : `<div>
      <d-cartoon></d-cartoon>
    </div>`
  })
  Vue.component('third',{
    template : '<div>333333content</div>'
  })
  Vue.component('forth',{
    template : `<div>
      <w-button type='info'>Dolary</w-button>
      <w-button type='danger'>origin</w-button>
    </div>`
  })
  Vue.component('fifth',{
    template : '<w-loading>555555content</w-loading>'
  })
  export default {
    data(){
      return {
        tabList:[
          {
            title:"Form表单",
            tabName:"first"
          },
          {
            title:"Button按钮",
            tabName:"forth"
          },
          {
            title:"Loading",
            tabName:"fifth"
          },
          {
            title:"dolary",
            tabName:"second"
          },
          {
            title:"33333",
            tabName:"third"
          },
        ]
      }
    }
  }
//html
<w-tabs :tab-list="tabList" tab-cut="move">
</w-tabs>

```
:::


### 标签页切换效果（tabCut）
```tabCut```接收两个参数```move```、```fade```这两个效果，一个是横向切换，一个是淡入淡出的效果。
<div class="demo-block">
  <w-tabs :tab-list="tabList" tab-cut="fade">
  </w-tabs>
</div>

:::demo
```html
  <w-tabs :tab-list="tabList" tab-cut="fade">
  </w-tabs>
```
:::

### Attributes
|   参数  |  说明  |   类型  |  可选值  |  默认值 |
|---------- |-------- |----------|------------- |--------  |
|  tabList  |选项名称以及标签页内容|Array|——|——|
|  tabCut   |标签页切换效果| String| fade/move| move|
