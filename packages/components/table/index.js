/**
 * @author wanjianxin
 * Date: 18/06/02
 */
import Table from './src/table.vue'

// let TableConstructor = Vue.extend(Table);
//
// let WTable = ()=>{
//   return new TableConstructor();
// }
//
// TableConstructor.prototype.config = function(options){
//
// }
// TableConstructor.prototype.init = function(tableInfo){
// }
Table.install = function (Vue) {
  Vue.component(Table.name, Table)
}
export default Table
