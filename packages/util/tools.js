export function directiveConfig (binding, defaults = {}) {
  return Object.assign(
    defaults,
    binding.modifiers,
    { value: binding.arg },
    binding.value || {}
  )
}
//Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。


