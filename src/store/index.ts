import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import authModule from './modules/auth.module'
import moviesModule from './modules/movies.module'
import RootState from './states/root.state'

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
    modules: {
        auth: authModule,
        movies: moviesModule
    }
})
