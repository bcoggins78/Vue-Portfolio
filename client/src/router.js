import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Portfolio from '@/views/Portfolio'
import Contact from '@/views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
