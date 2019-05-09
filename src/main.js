import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.axios = axios;

import scroller from '@/components/scroller';
Vue.component('scroller',scroller)

import loading from '@/components/loading'
Vue.component('loading',loading)

Vue.filter('setWH',function(value,input){
  return value.replace(/w\.h/,input)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
