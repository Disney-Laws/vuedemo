// 路由配置 显示不同页面
import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'

Vue.use(VueRouter)
const routes = [
    // 路由重定向，默认layout页面
    {
        path:'/',
        redirect: '/layout'
    },
    {
        path:'/layout',
        component:Layout,
    },
]

const router = new VueRouter({
    routes,
})

export default router