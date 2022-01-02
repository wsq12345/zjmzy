import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/view/Home.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/view/Home.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/view/Product.vue')
    },
    {
      path: '/service',
      name: 'Service',
      component: () => import('@/view/Service.vue')
    },
    {
      path: '/cases',
      name: 'Cases',
      component: () => import('@/view/Cases.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/view/About.vue')
    }
  ]
})
