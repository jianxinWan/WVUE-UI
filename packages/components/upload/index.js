/**
 * @author wanjianxin
 * Date: 18/05/29
 */
import Upload from './src/upload.vue'
Upload.install = function (Vue) {
  Vue.component(Upload.name, Upload)
}
export default Upload
