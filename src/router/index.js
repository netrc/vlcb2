import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Churches from '@/components/Churches'

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [{
        path: '/profile',
        name: 'Profile',
        component: Profile,

      },
      {
        path: '/login',
        name: 'Login',
        component: Login,

      },
      {
        path: '/Churches',
        name: 'Churches',
        component: Churches,

      },
      {
        path: '/',
        name: 'Home',
        component: Home,

      }
    ]

  },

)
