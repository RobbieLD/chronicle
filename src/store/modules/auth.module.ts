import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import RootState from '../states/root.state'
import AuthState from '../states/auth.state'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth'
import { FirebaseApp, initializeApp } from 'firebase/app'
import ChronicleConfig from '@/config'
import { getDatabase, onValue, ref, set } from 'firebase/database'
import Settings from '@/models/settings'

export default class AuthModule implements Module<AuthState, RootState> {  
    private firebase: FirebaseApp = initializeApp(ChronicleConfig.FirebaseConfig)
    private settingsLoaded = false

    public state(): AuthState {
        return {
            error: null,
            user: null,
            ready: false,
            settings: {
                showFlagged: true,
                backgroundQuery: ''
            }
        }
    }

    public namespaced?: boolean = true

    public getters: GetterTree<AuthState, RootState> = {
        
    }

    public mutations: MutationTree<AuthState> = {
        setUser: this.setUser,
        setError: this.setError,
        setReady: this.setReady,
        setProfile: this.setProfile
    }

    public actions: ActionTree<AuthState, RootState> = {
        signIn: this.signIn,
        authSubscribe: this.authSubscribe,
        signOut: this.signOut,
        loadProfile: this.loadProfile,
        updateProfile: this.updateProfile
    }

    // Mutations
    private setUser (state: AuthState, user: User | null): void {
        state.user = user
    }

    private setReady (state: AuthState, ready: boolean): void {
        state.ready = ready
    }
    
    private setError (state: AuthState, error: Error | null): void {
        state.error = error
    }

    private setProfile (state: AuthState, settings: Partial<Settings>): void {
        state.settings = { ...state.settings,...settings }
    }

    // Actions
    private async signIn ({ commit }: ActionContext<AuthState, RootState>, request: { email: string, password: string }): Promise<void> {
        try {
            const auth = getAuth(this.firebase)
            signInWithEmailAndPassword
            const response = await signInWithEmailAndPassword(auth, request.email, request.password)
            commit('setUser', response.user)
            commit('setError', null)
        } catch(error) {
            commit('setError', error)
        }
    }
    
    private authSubscribe ({ commit, dispatch }: ActionContext<AuthState, RootState>): void {
        const auth = getAuth(this.firebase)        
        onAuthStateChanged(auth, user => {
            commit('setReady', true)
            commit('setUser', user)
            dispatch('loadProfile')
        })
    }
    
    private async signOut ({ commit }: ActionContext<AuthState, RootState>): Promise<void> {
        const auth = getAuth(this.firebase)
        await auth.signOut()
        commit('setUser', null)
    }

    private async updateProfile({ state }: ActionContext<AuthState, RootState>, settings: Settings): Promise<void> {
        if (state.settings && state.user) {
            const databaseRef = ref(getDatabase(this.firebase), `${state.user?.uid}/settings`)
            await set(databaseRef, settings)
        }
    }
    
    private async loadProfile({ state, commit }: ActionContext<AuthState, RootState>): Promise<void> {
        // Only load if we've got a user loaded and haven't already subscribe
        if (!this.settingsLoaded && state.user) {
            const databaseRef = ref(getDatabase(this.firebase), `${state.user.uid}/settings`)
            onValue(databaseRef, (snapshot) => {
                commit('setProfile', snapshot.val())
                this.settingsLoaded = true
            })
        }
    }
}
