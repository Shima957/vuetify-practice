import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../view/Home'
import About from '../view/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})


export default router