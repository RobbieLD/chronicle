import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import authModule from './modules/auth.module'
import moviesModule from './modules/movies.module'
import musicalsModule from './modules/musicals.modules'
import uiModule from './modules/ui.module'
import RootState from './states/root.state'

export const storeKey: InjectionKey<Store<RootState>> = Symbol('store')
export const moduleKey: InjectionKey<string> = Symbol('module')

export const store = createStore<RootState>({
    modules: {
        auth: authModule,
        movies: moviesModule,
        ui: uiModule,
        musicals: musicalsModule
    }
})
