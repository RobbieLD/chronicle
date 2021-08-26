import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Movies from '../views/Movies.vue'
import Musicals from '../views/Musicals.vue'
import firebase from 'firebase/app'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/musicals',
        name: 'Musicals',
        component: Musicals,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta?.requiresAuth)) {
        if (firebase.auth().currentUser !== null) {
            next()
        } else {
            next({ name: 'Login' })
        }
    } else {
        next()
    }
})

export default router
