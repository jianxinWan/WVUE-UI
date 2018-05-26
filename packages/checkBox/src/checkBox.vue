<template>
  <div class="functional-select-wrapper" @click.stop="checkboxFocus">
    <label class="display-container multiple-select-container clearfix" :class="(show)?'single-selected-focus':''">
      <p v-show="selectedList.length == 0">
        <span v-if="originOptions.length != 0">请选择</span>
        <span v-else>没有选项</span>
      </p>
      <p class="multiple-selected-item" v-for="item in selectedList" track-by="$index">
        {{ item.name }}
        <i @click.stop.prevent="checkboxRemove(item.id)">×</i>
      </p>
      <i class="drop" :class="(show)?'drop-up':''">▼</i>
    </label>
    <div class="options-container" v-show="show">
      <div class="search-container">
        <input placeholder="search hear" class="search-input" v-model="search" @keyup="checkboxSearch" @click.stop />
      </div>
      <ul class="options-ul-list">
        <li v-show="displayOptions.length==0">没有查询到数据</li>
        <li v-for="item in displayOptions" @click.stop.prevent="checkboxSelect(item.id)" :class=" selectedIdList.indexOf(item.id)!=-1?'selected':'' ">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'w-checkbox',
    props:[
      'optionsData',
      'selectedData'
    ],
    data(){
      return {
        originOptions:[],
        displayOptions:[],
        show:false,
        search:'',
        selectedList:[]
      }
    },
    watch:{
      optionsData:function(val,oldVal){
        this.show = false;
        this.originOptions = val;
      },
      selectedData:function(val,oldVal){
        this.selectedList = val;
        this.selectedIdList = [];
        //赋值selectedList
        for(let i=0;i<this.selectedList.length;i++){
          let item = this.selectedList[i];
          this.selectedIdList.push(item.id);
        }
      }
    },
    mounted:function(){
      window.addEventListener('click',this.blur);
    },
    methods:{
      checkboxFocus:function(){
        if(!this.show){
          document.body.click();
          console.log("show checkbox");
          this.show = true;
          this.checkboxSearch();
          this.searchInputFocus();
        }else{
          this.blur();
        }
      },
      searchInputFocus:function(){
        let searchInput = this.$el.getElementsByClassName('search-input')[0];
        this.$nextTick(function(){
          searchInput.focus();
        })
      },
      checkboxSelect: function(id){
        let mySelf = this;
        let displayOptions = mySelf.originOptions;
        let selectedList = mySelf.selectedList;
        let selectedIdList = mySelf.selectedIdList;
        //在原始数组里找 找到后1.添加到selectedList
        //若selectedIdList存在 则删除
        if (selectedIdList.indexOf(id)!=-1){
          mySelf.checkboxRemove(id);
          return;
        }

        for (let i=0;i<displayOptions.length;i++){
          let item = displayOptions[i];
          if (item.id == id){
            selectedList.push(item);
            selectedIdList.push(id);
            mySelf.checkboxInitSearch();
            mySelf.checkboxSearch();
            mySelf.dispatchData();
            mySelf.searchInputFocus();
          }
        }
      },
      dispatchData:function(){
        this.$emit('selected',this.selectedList);
      },
      checkboxRemove:function(name){
        console.log(name);
        let myself = this;
        let optionName = name;
        let selectedList  = myself.selectedList;
        for(let i=0;i<selectedList.length;i++){
          let item  = selectedList[i];
          if(item.id == optionName){
            let index = selectedList.indexOf(item);
            selectedList.splice(index,1);
            myself.checkboxInitSearch();
            myself.checkboxSearch();
            myself.searchInputFocus();
            myself.dispatchData();
          }
        }
      },
      checkboxSearch: function(event){
        let mySelf = this;
        let search = mySelf.search;
        let REG_RULE = new RegExp(search,"i") //根据用户输入值做正则
        // console.log(REG_RULE)
        //inputDom.style.width = (search.length*0.6) + 'em'

        let originOptions = mySelf.originOptions;
        let displayOptions = mySelf.displayOptions;

        // 通过回车键 添加
        if (event && event.keyCode==13 && search!=''){
          for (let i=0;i<originOptions.length;i++){
            let item = originOptions[i];
            if (item.name == search){
              mySelf.multipleSelect(item.id);
              return;
            }
            else if(i == (originOptions.length-1)){
              return;
            }
          }
        }
        //将展示列表置空 然后用正则去原始列表中匹配
        mySelf.displayOptions = [];
        //正则表达 匹配搜索字符
        for (let i=0;i<originOptions.length;i++){
          let item = originOptions[i]
          if (REG_RULE.test(item.name)){
            mySelf.displayOptions.push(item)
          }
        }
      },
      checkboxInitSearch: function(){
        let mySelf = this;
        mySelf.search = '';
      },
      blur:function(){
        this.show = false;
        this.search = '';
      }
    }
  }
</script>
<style lang="less">
  @import "../../style/single.less";
</style>
