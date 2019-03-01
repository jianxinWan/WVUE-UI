/*
* author:origin
* date:18/6/23
* */
import cartoon from './src/cartoon.vue'
cartoon.install = function (Vue) {
  Vue.component(cartoon.name, cartoon)
}
export default cartoon
