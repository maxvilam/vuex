import Vue from 'vue'
import Router from 'vue-router'
import Busqueda from './views/Busqueda.vue'
import Inicio from '@/views/Inicio'


Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busqueda',
            name: 'inicio',
            component: Busqueda
        }     
    ]
})