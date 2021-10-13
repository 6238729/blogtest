import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:section?',
    component: () => import(/* webpackChunkName: "home" */ '../views/All.vue'),
    props: true
  }, {
    path: '/:section/:id',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
    props: true
  },
  {
    path: '/main',
    // name: 'board1',
    component: () => import('../views/Main.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
