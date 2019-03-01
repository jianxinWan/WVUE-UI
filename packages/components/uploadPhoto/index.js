/*
* 上传头像
* @author origin
* date:18/07/01
*/
import uploadPhoto from './src/uploadPhoto.vue'
uploadPhoto.install = function (Vue) {
  Vue.component(uploadPhoto.name, uploadPhoto)
}
export default uploadPhoto
