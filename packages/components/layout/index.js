/**
 * @author wanjianxin
 * Date: 18/06/12
 */
import Button from './src/layout.vue'
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}
export default Button
