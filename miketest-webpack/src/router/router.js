import Vue from 'vue';
import Router from 'vue-router'
import Home from '@/components/pages/home/home'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router;