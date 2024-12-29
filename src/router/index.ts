import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/home/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login/index.vue'),
    },
    {
      path: '/person',
      name: 'person',
      component: () => import('../pages/person/index.vue'),
    },
  ],
})

export default router
