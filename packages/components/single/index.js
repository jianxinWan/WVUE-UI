/**
 * @author wanjianxin
 * Date: 18/05/22
 */
import Single from './src/single.vue'
Single.install = function (Vue) {
  Vue.component(Single.name, Single)
}
export default Single
