import Vue from 'vue'
import Router from 'vue-router'

import movies from '@/router/movies'
import cinema from '@/router/cinema'
import mine from '@/router/mine'
Vue.use(Router)



export default new Router({
  mode:'history',
  base:'miaomiao',
  routes: [
      {path:'/', redirect:'/movies'},
      movies,
      cinema,
      mine
  ]
})
