import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewContact from './views/NewContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new-contact',
      name: 'new-contact',
      component: NewContact
    }
  ]
})
