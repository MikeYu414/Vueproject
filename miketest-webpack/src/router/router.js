import Vue from 'vue';
import Router from 'vue-router'
import Home from '@/components/pages/home/home'
import Welcome from '@/components/pages/welcome/welcome'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      redirect: '/welcome'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
  ]
})

export default router;