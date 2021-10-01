import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Movies from '../views/Movies.vue'
import Musicals from '../views/Musicals.vue'
import { store } from '@/store'
import ItemsList from '@/components/ItemsList.vue'
import Stats from '@/views/Stats.vue'
import Graph from '@/views/Graph.vue'
import Movie from '../views/Movie.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        component: Movie
    },
    {
        path: '/movies/',
        name: 'Movies',
        component: Movies,
        meta: {
            requiresAuth: true,
            hasAdd: true
        },
        children: [
            {
                path:'history',
                name: 'Movie History',
                component: ItemsList,
                props: {
                    getter: 'getRatedItems'
                }
            },
            {
                path: 'watch',
                name: 'Movie Watch List',
                component: ItemsList,
                props: {
                    getter: 'getUnratedItems'
                }
            }
        ]
    },
    {
        path: '/musicals/',
        name: 'Musicals',
        component: Musicals,
        meta: {
            requiresAuth: true,
            hasAdd: true
        },
        children: [
            {
                path: 'history',
                name: 'Musical History',
                component: ItemsList,
                props: {
                    getter: 'getRatedItems'
                }
            },
            {
                path: 'listen',
                name: 'Musical Listen List',
                component: ItemsList,
                props: {
                    getter: 'getUnratedItems'
                }
            },
        ]
    },
    {
        path: '/stats',
        name: 'Stats',
        component: Stats,
        meta: {
            requiresAuth: true,
            hasAdd: false
        },
    },
    {
        path: '/graph',
        name: 'Graph',
        component: Graph,
        meta: {
            requiresAuth: true,
            hasAdd: false
        },
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
