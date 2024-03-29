import {createRouter, createWebHistory} from "vue-router";

//import components
import Dashboard from "../views/Dashboard";
import AssignedReports from "../views/AssignedReports";
import CompletedReports from "../views/CompletedReports";
import CompletedReport from "../views/CompletedReport";
import AssignedReport from "../views/AssignedReport";
import InfoView from "../views/InfoView";
import SettingsView from "../views/SettingsView";

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
        path: '/assigned-reports/:id',
        name: 'assigned-report',
        component: AssignedReport,
    },
    {
        path: '/completed-reports',
        name: 'completed-reports',
        component: CompletedReports,
    },
    {
        path: '/completed-reports/:id',
        name: 'completed-report',
        component: CompletedReport,
    },
    {
        path: '/info',
        name: 'info',
        component: InfoView,
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsView,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;