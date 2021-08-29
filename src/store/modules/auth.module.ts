import { ActionContext, Module } from 'vuex'
import RootState from '../states/root.state'
import AuthState from '../states/auth.state'
import firebase from 'firebase/app'

// Mutations
const setUser = (state: AuthState, user: firebase.User | null): void => {
    state.user = user
}

const setError = (state: AuthState, error: Error | null): void => {
    state.error = error
}

// Actions
const signIn = async ({ commit }: ActionContext<AuthState, RootState>, request: { email: string, password: string }): Promise<void> => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(request.email, request.password)
        commit('setUser', response.user)
        commit('setError', null)
    } catch(error) {
        commit('setError', error)
    }
}

const authSubscribe = ({ commit }: ActionContext<AuthState, RootState>): void => {
    firebase.auth().onAuthStateChanged(user => commit('setUser', user))
}

const signOut = async ({ commit }: ActionContext<AuthState, RootState>): Promise<void> => {
    await firebase
      .auth()
      .signOut()
    commit('setUser', null)
  }

const getters = {}

const mutations = {
    setUser,
    setError
}

const actions = {
    signIn,
    signOut,
    authSubscribe
}

const state: AuthState = {
    error: null,
    user: null
}

const authModule: Module<AuthState, RootState> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}

export default authModule
