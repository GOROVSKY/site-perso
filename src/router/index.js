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
    meta: {
      vueName: 'Web projects',
    },
    component: () => import('../views/projects/projects.web.vue')
  },
  {
    path: '/projects/art',
    name: 'project.art',
    meta: {
      vueName: 'Artistic creations',
    },
    component: () => import('../views/projects/projects.art.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      vueName: 'Contact',
    },
    component: () => import('../views/contact/contact.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    meta: {
      vueName: 'Education & Skills',
    },
    component: () => import('../views/skills/skills.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
