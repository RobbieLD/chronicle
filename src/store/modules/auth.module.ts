import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import RootState from '../states/root.state'
import AuthState from '../states/auth.state'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth'
import { FirebaseApp, initializeApp } from 'firebase/app'
import ChronicleConfig from '@/config'

export default class AuthModule implements Module<AuthState, RootState> {  
    private firebase: FirebaseApp = initializeApp(ChronicleConfig.FirebaseConfig)

    public state(): AuthState {
        return {
            error: null,
            user: null,
            ready: false
        }
    }

    public namespaced?: boolean = true

    public getters: GetterTree<AuthState, RootState> = {
        
    }

    public mutations: MutationTree<AuthState> = {
        setUser: this.setUser,
        setError: this.setError,
        setReady: this.setReady
    }

    public actions: ActionTree<AuthState, RootState> = {
        signIn: this.signIn,
        authSubscribe: this.authSubscribe,
        signOut: this.signOut
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
    
    private authSubscribe ({ commit }: ActionContext<AuthState, RootState>): void {
        const auth = getAuth(this.firebase)        
        onAuthStateChanged(auth, user => {
            commit('setReady', true)
            commit('setUser', user)
        })
    }
    
    private async signOut ({ commit }: ActionContext<AuthState, RootState>): Promise<void> {
        const auth = getAuth(this.firebase)
        await auth.signOut()
        commit('setUser', null)
      }    
}
