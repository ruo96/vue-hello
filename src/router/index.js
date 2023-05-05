import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/welcome-again',
    name: 'welcome',
    component: () => import('@/views/WelcomeAgain.vue')
  },
  {
    path: '/welcome-finally',
    name: 'welcome-finally',
    component: () => import('@/views/WelcomeFinally.vue')
  },
  {
    path: '/pic-wall',
    name: 'pic-wall',
    component: () => import('@/views/PicWall.vue')
  },
  {
    path: '/pic-show',
    name: 'pic-show',
    component: () => import('@/views/PicShow.vue')
  },
  {
    path: '/pic-auto',
    name: 'pic-auto',
    component: () => import('@/views/PicAuto.vue')
  },
  {
    path: '/ajax-req',
    name: 'ajax-req',
    component: () => import('@/views/AjaxReq.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router