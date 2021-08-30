import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Movies from '../views/Movies.vue'
import Musicals from '../views/Musicals.vue'
import { store } from '@/store'
import ItemsList from '@/components/ItemsList.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/movies/',
        name: 'Movies',
        component: Movies,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path:'history',
                name: 'Movie History',
                component: ItemsList,
                props: {
                    getter: 'getSeenMovies'
                }
            },
            {
                path: 'watch',
                name: 'Movie Watch List',
                component: ItemsList,
                props: {
                    getter: 'getUnseenMovies'
                }
            }
        ]
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

// Not sure if this is the best way to do a global auth guard
// but it's the only one I can find that works with type script
// and the composition api
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(r => r.meta?.requiresAuth)
    if (requiresAuth && !store.state.auth.user) {
        router.push('/')
    } else {
        next()
    }
})

export default router
