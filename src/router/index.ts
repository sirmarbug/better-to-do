import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardLayout from '@/components/DashboardLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/today',
    children: [
      {
        path: '/today',
        name: 'Today',
        component: () => import(/* webpackChunkName: "about" */ '@/views/dashboard/Today.vue')
      },
      {
        path: '/project/:id',
        name: 'Project',
        component: () => import(/* webpackChunkName: "about" */ '@/views/dashboard/Project.vue')
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "about" */ '@/views/dashboard/Settings.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
