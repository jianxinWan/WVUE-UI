/* eslint-disable no-trailing-spaces,quotes,no-useless-return,comma-spacing,brace-style,no-unused-vars,space-before-blocks,indent */
import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)
let routes = []
let showChildren = []
let newRoutes = []
Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})
/*
* 遍历每个路由信息，添加component属性
* */
let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.name === 'index') {
        route.component = r => require.ensure([], () =>
          r(require(`../pages/${route.name}.vue`)))
        return
      }
      if (route.name === 'show') {
        route.component = r => require.ensure([], () =>
          r(require(`../pages/${route.name}.vue`)))
        return
      }
      route.component = r => require.ensure([], () =>
        r(require(`../docs/${route.name}.md`)))
    }
  })
}
let changeRouter = (router) => {
  router.forEach((route) => {
    if (route.name === "show") {
      newRoutes.push(route)
      return
    } else if (route.name === "index") {
      newRoutes.push(route)
      return
    } else {
      showChildren.push(route)
    }
  })
  newRoutes.forEach((route) => {
      if (route.name === "show"){
        route.children = showChildren
      }
  })
}
/*
* changeRouter  更改之前的路由结构，添加子路由
*/

addComponent(routes)
changeRouter(routes)
console.log(newRoutes)
export default new Router({
  routes: newRoutes
})
