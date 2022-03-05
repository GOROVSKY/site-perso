import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects/web',
    name: 'project.web',
    component: () => import('../views/projects/projects.web.vue')
  },
  {
    path: '/projects/art',
    name: 'project.art',
    component: () => import('../views/projects/projects.art.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
