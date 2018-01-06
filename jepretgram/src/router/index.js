import Vue from 'vue'
import Router from 'vue-router'
import LoginRegister from '@/components/LoginRegister'
import Home from '@/components/Home'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginRegister',
      component: LoginRegister
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile/:userId',
      name: 'Profile',
      component: Profile,
      props: true
    }
  ],
  mode: 'history'
})
