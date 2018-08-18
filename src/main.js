import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import './styles/index.scss'
import router from './router.js'

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
