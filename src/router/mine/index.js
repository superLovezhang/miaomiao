export default {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine.vue'),
    children:[
        {path:'register', component: ()=>import('@/components/register.vue')},
        {path:'forget', component: ()=>import('@/components/forget.vue')},
    ]
}