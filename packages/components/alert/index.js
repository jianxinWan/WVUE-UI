/**
 * @author wanjianxin
 * Date: 18/05/14
 */
import Alert from './src/alert.vue'

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert
