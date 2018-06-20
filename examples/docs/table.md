# table 表格
---
<script>
export default{
  data(){
    return{
      tableInfo:{
        theadInfo:[],
        tbodyInfo:[]
      }
    }
  },
  mounted:function(){
    this.addInfo();
  },
  methods:{
    addInfo:function(){
      this.tableInfo.tbodyInfo=[
        {'name':'origin','class':'rj1602','num':'04163048'},
        {'name':'Dolary','class':'wl1602','num':''}
      ];
      this.tableInfo.theadInfo=[
        {'name':'姓名','class':'班级','num':'学号'}
      ]
    }
  }
}
</script>
### 基础表格
<div class="demo-block">
  <w-table :tableInfo="tableInfo"></w-table>
</div>

::: demo
```html
<script>
export default{
  data(){
    return{
      tableInfo:{
        theadInfo:[],
        tbodyInfo:[]
      }
    }
  },
  mounted:function(){
    this.addInfo();
  },
  methods:{
    addInfo:function(){
      this.tableInfo.tbodyInfo=[
        {'name':'origin','class':'rj1602','num':'04163048'},
        {'name':'Dolary','class':'wl1602','num':''}
      ];
      this.tableInfo.theadInfo=[
        {'name':'姓名','class':'班级','num':'学号'}
      ]
    }
  }
}
</script>
<w-table :table-info="tableInfo" bordered></w-table>
```
:::

### 带边框
通过border属性来设置table是否带边框，默认值是false，没有边框

<div class="demo-block">
  <w-table :table-info="tableInfo" bordered></w-table>
</div>

::: demo
```html

```
:::

### 居中
通过设置centered来设置table中文字是否居中

<div class="demo-block">
  <div style="width:300px;">
    <w-table :table-info="tableInfo" bordered centered></w-table>
  </div>
</div>

:::demo
```html
```
:::

### narrow(变窄)

通过设置narrow属性设置边框是否为窄边框

<div class="demo-block">
  <w-table :table-info="tableInfo" bordered narrowed centered></w-table>
</div>

:::demo
```html

```
:::

### 设置高亮(heighlight)
<div class="demo-block">
  <w-table :table-info="tableInfo" bordered hightlight></w-table>
</div>

:::demo
```html

```
:::
