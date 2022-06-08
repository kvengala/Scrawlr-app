import {createRouter, createWebHistory } from 'vue-router'

import UpVote from '../components/UpVote.vue'

const routes = [
    {
        path: '/',
        name: 'UpVote',
        component: UpVote,
    }
]

const router = createRouter({
    history :createWebHistory(),
    routes,
})

export default router