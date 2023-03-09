import {createRouter, createWebHistory} from "vue-router";

//import components
import Dashboard from "../views/Dashboard";

const routes = [
    //declaring routes
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;