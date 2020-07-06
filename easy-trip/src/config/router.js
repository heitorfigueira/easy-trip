import Buscador from '../components/pages/Buscador.vue'
import PaginaNaoEncontrada from '../components/pages/PaginaNaoEncontrada.vue'


const routes = [
    {
        path: '/',
        component: Buscador,
        name: 'buscador',
    },
    {
        path: '*',
        component: PaginaNaoEncontrada,
        name: 'PaginaNaoEncontrada',
    },
    
]

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})