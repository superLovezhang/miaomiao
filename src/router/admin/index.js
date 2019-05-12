export default  {
    path: '/admin', component: () => import('@/views/admin.vue'),
    children:[
        {path:'user', component:()=>import('@/components/admin/user.vue')},
        {path:'movies', component:()=>import('@/components/admin/movies.vue')},
        {path:'cinema', component:()=>import('@/components/admin/cinema.vue')},
    ]
}