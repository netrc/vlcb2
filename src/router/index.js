import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Churches from '@/components/Churches'
import Brasses from '@/components/Brasses'
import Rubbings from '@/components/Rubbings'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    { path: '/profile',  name: 'Profile',  component: Profile, },
    { path: '/login',    name: 'Login',    component: Login, },
    { path: '/Churches', name: 'Churches', component: Churches, },
    { path: '/Brasses',  name: 'Brasses',  component: Brasses, },
    { path: '/Rubbings', name: 'Rubbings', component: Rubbings, },
    { path: '/',         name: 'Home',     component: Home, }
  ]
})
