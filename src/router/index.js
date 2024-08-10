import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import map from '../views/map.vue'
import Uploadfils from '../views/Uploadfils.vue'
import favorite from '../views/favorite.vue'
import chart from '../views/thechart/chart.vue'
import salef from '../views/thechart/salef.vue'

// admins
import Admins from '../views/the_admins/Admins.vue'
import Register from '../views/the_admins/Register.vue'
import Login from '../views/the_admins/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/upload',
      name: 'uploadfiles',
      component: Uploadfils
    },
    {
      path: '/favor',
      name: 'favorite',
      component: favorite
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {
      path: '/sall',
      name: 'salef',
      component: salef
    },
    // the admin and user path
    {
      path: '/0129admins',
      name: 'admins',
      component: Admins
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
