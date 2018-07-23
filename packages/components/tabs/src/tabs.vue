<template>
  <div class="tab">
    <div class="tab-hd">
      <ul>
        <li v-for="item in tabList" @click="change(item.tabName)" :class="activeShow(item)">
          <div class="nav">
            {{item.title}}
          </div>
          <div class="underLine" :class="{'underLine-active':currentTab === item.tabName}"></div>
        </li>
      </ul>
    </div>
    <div class="tab-bd">
      <transition :name="tabCut" mode="out-in">
        <keep-alive>
          <component :is="currentTabComponent">
          </component>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'w-tabs',
    data(){
      return {
        currentTab:this.tabList[0].tabName
      }
    },
    props:{
      tabList:{
        type:Array,
        default:function(){
          return []
        }
      },
      tabCut:{
        type:String,
        default:''
      },
      isWave:{
        type:Boolean,
        default:true
      }
    },
    methods:{
      change(contentTit){
        this.currentTab = contentTit;
      },
      activeShow(item){
        return {
          'nav-active':this.currentTab === item.tabName
        }
      },
    },
    computed:{
      currentTabComponent(){
        return this.currentTab.toLowerCase();
      }
    }
  }
</script>

<style>
  @import "../../style/tabs.css";
</style>
