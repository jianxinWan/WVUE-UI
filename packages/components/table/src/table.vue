<template>
  <table class="table-style" cellspacing="0" cellpadding="0" :class="setStyle">
    <thead>
      <tr v-for=" item in tableInfoList.theadInfo">
        <th v-for="list in item">{{list}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for=" item in tableInfoList.tbodyInfo">
        <th v-for="list in item">{{list}}</th>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'w-table',
    data(){
      return {
        tableInfoList:{}
      }
    },
    computed:{
      setStyle:function(){
        return {
          'table-bordered':this.bordered,
          'table-centered':this.centered,
          'table-narrow':this.narrowed,
          'table-lineHeight':this.lineHeight
        }
      }
    },
    props:{
      tableInfo:{},
      centered:Boolean,
      bordered:Boolean,
      striped:Boolean,
      lineHeight:Boolean,
      narrowed:Boolean
    },
    mounted:function(){
      this.tableInfoList = this.tableInfo;
    },
    methods:{
    }
  }
</script>
<style>
  @import '../../style/table.css';
</style>
