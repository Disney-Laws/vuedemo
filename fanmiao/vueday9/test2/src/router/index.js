import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/index.vue'
import News from '@/views/news.vue'
import Sports from '@/views/sports.vue'

import Sindex from '@/components/sindex.vue'
import In from '@/components/in.vue'
import Out from '@/components/out.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/index',
        component:Index,
    },
    {
        path:'/news',
        component:News,
    },
    {
        path:'/sports',
        component:Sports,
        children:[
            {
                path:'sindex',
                component:Sindex,
            },
            {
                path:'in',
                component:In,
            },
            {
                path:'out',
                component:Out,
            },
        ]
    },
]

export const router = new VueRouter({
    routes,
})