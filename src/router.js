import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './views/login'
import home from '@/views/home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'Login', component: login },
    { path: '/', name: 'Home', component: home }
  ]
})

export default router