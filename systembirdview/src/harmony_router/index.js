import Vue from 'vue'
import Router from 'vue-router'
import HarmonyContainer from '@/components/HarmonyContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HarmonyContainer',
      component: HarmonyContainer
    }
  ]
})
