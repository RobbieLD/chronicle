import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import userModule from './modules/user.module'
import RootState from './states/root.state'

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
    modules: {
        user: userModule,
    }
})
