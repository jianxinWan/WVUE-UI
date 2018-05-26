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
          {"id":"1","name":"lemon"},
          {"id":"2","name":"mike"},
          {"id":"3","name":"lara"},
          {"id":"4","name":"zoe"},
          {"id":"5","name":"steve"},
          {"id":"6","name":"nolan"}
        ];
        myself.checkbox.selectedList=[
          {"id":"1","name":"lemon"},
          {"id":"3","name":"lara"}
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
<div class="demo-block">
  <w-checkbox :optionsData="checkbox.originOptions" :selectedData="checkbox.selectedList" @selected="checkboxCallback"></w-checkbox>
</div>

::: demo
```html
```
:::
