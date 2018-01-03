import Vue from 'vue'
import Router from 'vue-router'
import LoginRegister from '@/components/LoginRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginRegister',
      component: LoginRegister
    }
  ]
})
