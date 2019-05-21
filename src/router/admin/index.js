export default  {
    path: '/admin', component: () => import('@/views/admin.vue'),
    children:[
        {path:'/admin', redirect:'/admin/user'},
        {path:'user', component:()=>import('@/components/admin/user.vue')},
        {path:'movies', component:()=>import('@/components/admin/movies.vue')},
        {path:'cinema', component:()=>import('@/components/admin/cinema.vue')},
    ]
}