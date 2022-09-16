import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '', //不写/
    component: Home
  },
  {
    path: '/about',
    component: () => import('../views/about/About.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
