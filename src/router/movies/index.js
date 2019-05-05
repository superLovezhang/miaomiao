export default {
     path: '/movies',
     name: 'movies',
     component: () => import('@/views/movies.vue'),
     children:[
          {path:'address', component: () => import('@/components/address.vue')},
          {path:'newplay', component: () => import('@/components/newplay.vue')},
          {path:'comming', component: () => import('@/components/comming.vue')},
          {path:'search', component: () => import('@/components/search.vue')},
     ]
}