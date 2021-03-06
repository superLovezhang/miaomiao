export default {
     path: '/movies',
     name: 'movies',
     component: () => import('@/views/movies.vue'),
     children: [
          { path: '/movies', redirect: 'newplay' },
          {
               path: '1/detail/:id', 
               components: {
                    default: () => import('@/components/newplay.vue'),
                    detail: () => import('@/components/detailPage')
               },
               props:{
                    detail:true
               }
          },
          {
               path: '2/detail/:id', 
               components: {
                    default: () => import('@/components/comming.vue'),
                    detail: () => import('@/components/detailPage')
               },
               props:{
                    detail:true
               }
          },
          { path: 'address', component: () => import('@/components/address.vue') },
          { path: 'newplay', component: () => import('@/components/newplay.vue') },
          { path: 'comming', component: () => import('@/components/comming.vue') },
          { path: 'search', component: () => import('@/components/search.vue') },
     ]
}