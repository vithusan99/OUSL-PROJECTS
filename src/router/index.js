import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import('../views/travel-information/Travel.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/About.vue')
  },
  {
    path: '/destination',
    name: 'Destination',
    component: () => import( '../views/destination/Destination.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/experience/Experience.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
