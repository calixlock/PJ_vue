import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/pages/Home.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Home}, // route 제대로 작동하는지 확인

]
const router = createRouter({
    history: createWebHistory(),
    routes: routes, //routes만 써도 같은 의미;
})

createApp(App).use(router).mount('#app')
