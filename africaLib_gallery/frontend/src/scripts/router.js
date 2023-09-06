import Home from "@/pages/Home.vue";
import login from "@/pages/login.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: login}, // route 제대로 작동하는지 확인

]
const router = createRouter({
    history: createWebHistory(),
    routes: routes, //routes만 써도 같은 의미;
})

export default router;