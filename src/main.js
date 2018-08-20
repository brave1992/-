import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import './styles/index.scss'
import './styles/element.scss'
import router from './router.js'

Vue.use(ElementUI)

// 注册一个全局守卫,作用是在路由跳转前,对路由进行判断,防止未登录的用户跳转到其他页面去
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('mytoken')
  if (token) {
    // 如果已经登录,不做任何干涉
    next()
  } else {
    // 如果没有登录,但你访问的是其他需要登录的页面,强制跳转到login页面
    if (to.path !== '/login') {
      next({ path: '/login' })
    } else {
      // 如果没有登录,但你访问的是login页面,那就不做任何干涉.
      next()
    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
