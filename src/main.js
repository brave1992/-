import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import './styles/index.scss'
import router from './router.js'

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('myToken')
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
