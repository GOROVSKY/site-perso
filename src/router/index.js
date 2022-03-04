import { createRouter, createWebHistory } from 'vue-router'
import Code from '../views/code.vue'

const routes = [
  {
    path: '/',
    name: 'code',
    component: Code
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
