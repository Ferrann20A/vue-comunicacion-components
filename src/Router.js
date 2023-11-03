import {createRouter, createWebHistory} from 'vue-router';
import CheckboxSuma from './components/CheckboxSuma.vue';
import HomeComponent from './components/HomeComponent.vue'

const myRoutes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/checkbox",component:CheckboxSuma
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;