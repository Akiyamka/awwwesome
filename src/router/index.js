import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/homepage/HomePage'
import Contact from '@/components/pages/contact/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
