import { Module } from 'vuex'
import RootState from '../states/root.state'
import UIState from '../states/ui.state'

// Mutations
const setAddPanelOpen = (state: UIState, open: boolean): void => {
    state.addPanelOpen = open
}

// Actions

const getters = {}

const mutations = {
    setAddPanelOpen
}

const actions = {}

const state: UIState = {
    addPanelOpen: false
}

const uiModule: Module<UIState, RootState> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}

export default uiModule
