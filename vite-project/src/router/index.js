import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import DashboardVIew from "../views/Dashboard.vue";
import tambahData from "../views/tambahData.vue";
import editData from "../views/editData.vue";
// import Users from "../views/user.vue"

const routes = [
    {
        path:"",component: DashboardVIew
    },
    {
        path:"/tambahData",component:tambahData
    },
    {
        path:"/editData/:id",component:editData, name:"editData"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

export default router