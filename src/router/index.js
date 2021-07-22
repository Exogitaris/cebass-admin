import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from "@/components/pages/Dashboard";

const routes = [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;