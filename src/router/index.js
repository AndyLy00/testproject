import { createRouter, createWebHistory } from 'vue-router'
import Store from '../pages/Store.vue'

const routes = [
    {
        path: '/',
        component: Store,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;