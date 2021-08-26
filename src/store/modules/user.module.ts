import { Module } from 'vuex'
import RootState from '../states/root.state'
import UserState from '../states/user.state'

// Mutations
const getters = {}

const mutations = {}

const actions = {}

const state: UserState = {
}

const uiModule: Module<UserState, RootState> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}

export default uiModule
