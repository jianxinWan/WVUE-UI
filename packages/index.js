/* eslint-disable comma-dangle */
/**
 * @author origin
 * Date: 18/05/06
 */
import MetaInfo from './meta-info/index'

import WButton from './button/index.js'
import WAlert from './alert/index'
import WLoadingBar from './loading-bar/index'
import Wlayout from './layout/index'

const components = [
  WButton,
  WAlert,
  Wlayout
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WButton,
  WAlert,
  WLoadingBar,
  Wlayout
}
