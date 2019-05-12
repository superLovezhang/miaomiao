import Vue from 'vue'
import Router from 'vue-router'

import movies from '@/router/movies'
import cinema from '@/router/cinema'
import mine from '@/router/mine'
import admin from '@/router/admin'
Vue.use(Router)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


export default new Router({
  mode: 'history',
  base: 'miaomiao',
  routes: [
    { path: '/', redirect: '/movies' },
    movies,
    cinema,
    mine,
    admin
  ]
})
