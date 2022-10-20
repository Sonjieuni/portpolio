import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Deep from '../views/Deep.vue'
import Pushup from '../views/Pushup.vue'
import Platform from '../views/Platform.vue'
import Kiosk from '../views/Kiosk.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/deep',
    name: 'deep',
    component: Deep
  },
  {
    path: '/pushup',
    name: 'pushup',
    component: Pushup
  },
  {
    path: '/platform',
    name: 'platform',
    component: Platform
  },
  {
    path: '/kiosk',
    name: 'kiosk',
    component: Kiosk
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
