/**
 * @author origin
 * Date: 18/06/11
 */
import Swiper from './src/swiper.vue'
Swiper.install = function (Vue) {
  Vue.component(Swiper.name, Swiper)
}
export default Swiper
