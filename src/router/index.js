import {createRouter, createWebHistory} from "vue-router";

//import components
import Dashboard from "../views/Dashboard";
import AssignedReports from "../views/AssignedReports";
import CompletedReports from "../views/CompletedReports";

const routes = [
    //declaring routes
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/assigned-reports',
        name: 'assigned-reports',
        component: AssignedReports,
    },
    {
        path: '/completed-reports',
        name: 'completed-reports',
        component: CompletedReports,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;