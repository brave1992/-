import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './views/login'
import home from '@/views/home'
import Welcome from '@/views/welcome/welcome'
import User from '@/views/user/User'
import Right from '@/views/right/Rights'
import Role from '@/views/right/Roles'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'Login', component: login },
    { path: '/', name: 'Home', component: home, redirect: {path: '/welcome'},
      children: [
        { name: 'welcome', path: 'welcome', component: Welcome},
        { name: 'User', path: 'users', component: User },
        { name: 'Rights', path: 'rights', component: Right },
        { name: 'Roles', path: 'roles', component: Role }
      ]
    }
  ]
})

export default router