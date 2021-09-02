import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import RootState from '../states/root.state'
import AuthState from '../states/auth.state'
import firebase from 'firebase/app'

export default class AuthModule implements Module<AuthState, RootState> {  
    
    public state(): AuthState {
        return {
            error: null,
            user: null
        }
    }

    public namespaced?: boolean = true

    public getters: GetterTree<AuthState, RootState> = {
        
    }

    public mutations: MutationTree<AuthState> = {
        setUser: this.setUser,
        setError: this.setError
    }

    public actions: ActionTree<AuthState, RootState> = {
        signIn: this.signIn,
        authSubscribe: this.authSubscribe,
        signOut: this.signOut
    }

    // Mutations
    private setUser (state: AuthState, user: firebase.User | null): void {
        state.user = user
    }
    
    private setError (state: AuthState, error: Error | null): void {
        state.error = error
    }

    // Actions
    private async signIn ({ commit }: ActionContext<AuthState, RootState>, request: { email: string, password: string }): Promise<void> {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(request.email, request.password)
            commit('setUser', response.user)
            commit('setError', null)
        } catch(error) {
            commit('setError', error)
        }
    }
    
    private authSubscribe ({ commit }: ActionContext<AuthState, RootState>): void {
        firebase.auth().onAuthStateChanged(user => commit('setUser', user))
    }
    
    private async signOut ({ commit }: ActionContext<AuthState, RootState>): Promise<void> {
        await firebase
          .auth()
          .signOut()
        commit('setUser', null)
      }    
}
