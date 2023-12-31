import {createRouter, createWebHistory} from 'vue-router';
import CheckboxSuma from './components/CheckboxSuma.vue';
import HomeComponent from './components/HomeComponent.vue'
import NumeroDoble from './components/NumerDoble.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue'

const myRoutes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/checkbox",component:CheckboxSuma
    },
    {
        path:"/numerodoble/:numero?", component:NumeroDoble
    },
    {
        path:"/tabla/:numero", component:TablaMultiplicar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;