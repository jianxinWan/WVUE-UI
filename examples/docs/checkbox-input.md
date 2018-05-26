<script>
  export default{
    data(){
      return {
        checkbox:{
          originOptions: [],
          selectedList:[]
        }
      }
  	},
  	mounted:function() {
  		this.queryData();
  	},
  	methods: {
  		queryData: function(){
  		  let myself = this;
        myself.checkbox.originOptions=[
          {"id":"1","name":"All of me"},
          {"id":"2","name":"Fight song"},
          {"id":"3","name":"Love me"},
          {"id":"4","name":"zoe"},
          {"id":"5","name":"steve"},
          {"id":"6","name":"nolan"}
        ];
        myself.checkbox.selectedList=[
          {"id":"1","name":"All of me"},
          {"id":"3","name":"Love me"}
        ];
  		},
      checkboxCallback: function(data){
        this.selectedList = data;
        console.log("父组件checkbox选中的是"+JSON.stringify(data));
      }
    }
  }
</script>
# check box 多选框
---
### 基础用法
```w-checkbox```与单选框类似，我们需要通过methods中通过方法指定选项列表和选项的值，通过checkCallback函数返回选中值的列表，具体实现过程请看代码。
<div class="demo-block">
  <w-checkbox :options-data="checkbox.originOptions" :selected-data="checkbox.selectedList" @selected="checkboxCallback"></w-checkbox>
</div>

::: demo
```html
<script>
  export default{
    data(){
      return {
        checkbox:{
          originOptions: [],
          selectedList:[]
        }
      }
  	},
  	mounted:function() {
  		this.queryData();
  	},
  	methods: {
  		queryData: function(){
  		  let myself = this;
        myself.checkbox.originOptions=[
          {"id":"1","name":"All of me"},
          {"id":"2","name":"Fight song"},
          {"id":"3","name":"Love me"},
          {"id":"4","name":"zoe"},
          {"id":"5","name":"steve"},
          {"id":"6","name":"nolan"}
        ];
        myself.checkbox.selectedList=[
          {"id":"1","name":"All of me"},
          {"id":"3","name":"Love me"}
        ];
  		},
      checkboxCallback: function(data){
        this.selectedList = data;
        console.log("父组件checkbox选中的是"+JSON.stringify(data));
      }
    }
  }
</script>
<div class="demo-block">
  <w-checkbox :options-data="checkbox.originOptions" :selected-data="checkbox.selectedList" @selected="checkboxCallback"></w-checkbox>
</div>
```
:::
### 其他功能
**改变大小**和**函数说明**、**模糊查询**这些与单选框类似，具体查看演示和实现代码。
<div class=demo-block>
  <div style="width:400px">
    <w-checkbox :options-data="checkbox.originOptions" :selected-data="checkbox.selectedList" @selected="checkboxCallback"></w-checkbox>
  </div>
</div>

::: demo
```html
<script>
  //与上面一致
</script>
<div style="width:300px;">
    <w-checkbox :options-data="checkbox.originOptions" :selected-data="checkbox.selectedList" @selected="checkboxCallback"></w-checkbox>
  </div>
```
:::

### Attributes

| 参数      | 说明   | 类型      | 可选值       | 默认值   |
|---------- |-------- |----------|------------- |--------  |
| options-data|   可选值列表  | Array |自定义    | null     |
| selected-data| 指定当前选中值得列表| Array |可选列表中出现的值|null|
