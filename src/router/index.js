import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router
