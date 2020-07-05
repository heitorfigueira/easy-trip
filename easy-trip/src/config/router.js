import Buscador from '../components/pages/Buscador.vue'


const routes = [
    {
        path: '/',
        component: Buscador,
        name: 'buscador',
    }
]

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})