/**
 * @author wanjianxin
 * Date: 18/05/10
 */
import Button from './src/button.vue'
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}
export default Button
