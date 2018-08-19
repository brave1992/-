import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './views/login'
import home from '@/views/home'
import Welcome from '@/views/welcome/welcome'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'Login', component: login },
    { path: '/', name: 'Home', component: home, redirect: {path: '/welcome'},
      children: [
        {name: 'welcome', path: 'welcome', component: Welcome}
      ]
    }
  ]
})

export default router