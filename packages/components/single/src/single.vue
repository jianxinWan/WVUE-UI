<template>
<div class="functional-select-wrapper" @click.stop="singleFocus()">
  <label class="display-container clearfix" :class="(show)?'single-selected-focus':''">
    <p v-show="selected.id == ''">
      <span v-if="originOptions.length != 0">请选择</span>
      <span v-else>没有选项</span>
    </p>
    <p class="single-selected">{{ selected.name }}</p>
    <i class="drop" :class="(show)?'drop-up':''">▼</i>
  </label>
  <div class="options-container" v-show="show">
    <div class="search-container">
      <input placeholder="search here" class="search-input" v-model="search" @keyup="singleSearch" @click.stop />
    </div>
    <ul class="options-ul-list">
      <li v-show="displayOptions.length == 0">没有查询到数据</li>
      <li v-for="(item,index) in displayOptions" :key="index" @click.stop.prevent="singleSelect(item.id)" :class="(item.id == selected.id)?'selected':''">{{ item.name }}</li>
    </ul>
  </div>
</div>
</template>
<script>
  export default {
    name:'w-single-input',
    props: ['optionsdata','selecteddata'],
    data: function() {
      return{
        originOptions: [],
        displayOptions: [],
        show: false,
        search: '',
        selected: {
          id: "",
          name: ""
        }
      }
    },
    mounted: function(){
      //设置点击其他区域关闭选项
      window.addEventListener('click',this.blur);
    },
    watch: {
      //监听选项值和选中值得变化
      optionsdata: function (val, oldVal) {
        this.originOptions = val;
        this.show = false;
        // 默认值
        if (this.selected.id == ''){
          this.selected = this.originOptions[0];
        }
      },
      selecteddata: function(val, oldVal){
        this.selected = val
      }
    },
    methods:{
      singleFocus: function(){
        if (!this.show){
          document.body.click();
          console.log('single show');
          this.show = true;
          this.singleSearch();
          this.searchInputFocus();
        }
        else{
          this.blur();
        }
      },
      searchInputFocus: function(){
        let searchInput = this.$el.getElementsByClassName('search-input')[0];
        this.$nextTick(function(){
          //下一次dom更新之后使得searchInput获得焦点
          searchInput.focus();
        })
      },
      singleSelect: function(id){
        let mySelf = this;
        let displayOptions = mySelf.displayOptions;
        for (let i=0; i<displayOptions.length;i++){
          let item = displayOptions[i];
          //在展示数组里找 找到后1.添加到selected
          if (item.id == id){
            let selected = mySelf.selected;
            selected.id = item.id;
            selected.name = item.name
          }
        }
        //关闭下拉框，清除search输入的值。
        mySelf.show = false;
        this.search = '';
        //传递给父级组件
        this.$emit('selected',this.selected);
         //console.log('选中的是' + JSON.stringify(this.selected));
      },
      singleSearch: function(){
        let mySelf = this;
        let search = mySelf.search;
        //根据用户输入值做正则
        let REG_RULE = new RegExp(search,"i");
        let originOptions = mySelf.originOptions;
        //将展示列表置空 然后用正则去原始列表中匹配
        mySelf.displayOptions = [];
        for (let i=0;i<originOptions.length;i++){
          let item = originOptions[i];
          if (REG_RULE.test(item.name)){
            mySelf.displayOptions.push(item)
          }
        }
      },
      blur: function(){
        this.show = false;
        this.search = '';
      }
    }
  }
</script>
<style>
  @import "../../style/single.css";
</style>
