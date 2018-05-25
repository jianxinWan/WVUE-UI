<script>
  export default{
    data(){
      return {
        single:{
          originOptions: [],
          selected: {}
        }
      }
  	},
  	mounted :function() {
  		this.queryData();
  	},
  	methods: {
  		queryData: function(){
        var mySelf = this
        //do ajax here
        // 单选
        mySelf.single.originOptions = [{"id":"1","name":"lemon"},{"id":"2","name":"mike"},{"id":"3","name":"lara"},{"id":"4","name":"zoe"},{"id":"5","name":"steve"},{"id":"6","name":"nolan"}];
        mySelf.single.selected = {"id":"4","name":"zoe"}
        this.$nextTick(function(){
            //dom更新之后，执行一些其他操所。
        })
  		},
      singleCallback: function(data){
        this.single.selected = data;
        console.log('父级元素调用singleCallback 选中的是' + JSON.stringify(data))
      }
    }
  }
</script>
# check box 单选框
---
### 基础用法
单选框```w-single-input```设定主要包含两个数组```originOptions```、```selected```这两个数组，```originOptions```代表单选框中可供选择的值，```selected```代表
当前选中的值，如果```select```未设定，将会显示```请选择```字样，请看下面演示和具体实现代码。
<div class="demo-block">
  <w-single-input v-bind:optionsdata="single.originOptions" v-bind:selecteddata="single.selected" @selected="singleCallback"></w-single-input>
</div>

::: demo
```html
<script>
export default{
    data(){
      return {
        single:{
          originOptions: [],
          selected: {}
        }
      }
  	},
  	mounted :function() {
  		this.queryData();
  	},
  	methods: {
  		queryData: function(){
        var mySelf = this
        //do ajax here
        // 单选
        mySelf.single.originOptions = [{"id":"1","name":"lemon"},{"id":"2","name":"mike"},{"id":"3","name":"lara"},{"id":"4","name":"zoe"},{"id":"5","name":"steve"},{"id":"6","name":"nolan"}];
        mySelf.single.selected = {"id":"4","name":"zoe"}
        this.$nextTick(function(){
            //dom更新之后，执行一些其他操所。
        })
  		},
      singleCallback: function(data){
        this.single.selected = data;
        console.log('父级元素调用singleCallback 选中的是' + JSON.stringify(data))
      }
    }
  }
</script>
//html部分
<div class="demo-block">
  <w-single-input v-bind:optionsdata="single.originOptions" v-bind:selecteddata="single.selected" @selected="singleCallback" ></w-single-input>
</div>
```
:::

### 改变大小
```w-single-input```设定样式大小很简单，我们只需要在调用此组件的同时在外部包含一个div即可。（注：为了展示，此个单选框与上一个数据相同）。
<div class="demo-block">
  <div style="width:300px">
  <w-single-input v-bind:optionsdata="single.originOptions" v-bind:selecteddata="single.selected" @selected="singleCallback"></w-single-input>
  </div>
</div>

::: demo
```html
<div class="demo-block">
  <div style="width:300px">
  <w-single-input :optionsdata="single.originOptions" :selecteddata="single.selected" @selected="singleCallback"></w-single-input>
  </div>
</div>
```
:::


### 设定样式
emmmmm,先实现功能,后续添加.

### Attributes

| 参数      | 说明   | 类型      | 可选值       | 默认值   |
|---------- |-------- |----------|------------- |--------  |
| optionsdata|   可选值列表  | Array |自定义    | null     |
| selected   | 指定当前选中的值| Json |可选列表中出现的值|null|

