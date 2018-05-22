/**
 * @author wanjianxin
 * Date: 18/05/22
 */
import checkBox from './src/checkBox.vue'
checkBox.install = function (Vue){
  Vue.component(checkBox.name, checkBox)
}
export default checkBox
