import Vue from 'vue'
import Router from 'vue-router'
import HeaderGuide from '@/components/HeaderGuide.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HeaderGuide',
      component: HeaderGuide
    }
  ]
})
