import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import AuthModule from './modules/auth.module'
import MovieModule from './modules/movies.module'
import MusicalModule from './modules/musicals.modules'
import UIModule from './modules/ui.module'
import RootState from './states/root.state'

export const storeKey: InjectionKey<Store<RootState>> = Symbol('store')
export const moduleKey: InjectionKey<string> = Symbol('module')

export const store = createStore<RootState>({
    modules: {
        auth: new AuthModule(),
        movies: new MovieModule(),
        ui: new UIModule(),
        musicals: new MusicalModule()
    }
})
