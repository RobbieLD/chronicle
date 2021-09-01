import { ActionContext, Module } from 'vuex'
import RootState from '../states/root.state'
import firebase from 'firebase/app'
import ItemData from '@/models/item'
import MusicalState from '../states/musicals.state'
import MusicalService from '@/services/musical.service'
import { Thumbnail } from '@/models/musical-poster'
import MusicalSuggestion from '@/models/musical-search'

const path = '/musicals'

// Helpers
// TODO; Move this to a common helper
const filtered = (state: MusicalState, test: (item: ItemData) => boolean) => {
    return Object.keys(state.musicals)
        .filter(key => test(state.musicals[key]))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: state.musicals[key]
            }
        }, {})
}

// Getters
const getSeenMusicals = (state: MusicalState): Record<string, ItemData> => {
    if (state.musicals) {
        return filtered(state, (item) => item.year > 0)
    } else {
        return {}
    }
}

const getUnseenMusicals = (state: MusicalState): Record<string, ItemData> => {
    if (state.musicals) {
        return filtered(state, (item) => item.year === 0)
    } else {
        return {}
    }
}


// Mutations
const setMusicals = (state: MusicalState, musicals: Record<string, ItemData>): void => {
    state.musicals = musicals
}


// Actions
const loadMusicals = async ({ commit }: ActionContext<MusicalState, RootState>): Promise<void> => {
    const databaseRef = firebase.database().ref(path)
    databaseRef.on('value', (snapshot) => {
        commit('setMusicals', snapshot.val())
    })
}

const loadSuggestions = async (_: ActionContext<MusicalState, RootState>, query: string): Promise<MusicalSuggestion[]> => {
    const service = new MusicalService()
    const results = await service.Search(query)
    return results.query.search.map<MusicalSuggestion>(r => new MusicalSuggestion(r))
}

const loadPoster = async (_: ActionContext<MusicalState, RootState>, title: string): Promise<Thumbnail> => {
    const service = new MusicalService()
    const results = await service.Details(title)
    return Object.values(results.query.pages)[0].thumbnail
}

const addMusical = async (_: ActionContext<MusicalState, RootState>, movie: ItemData): Promise<void> => {
    const databaseRef = firebase.database().ref(path)
    await databaseRef.push(movie)
}

const update = async ({ state }: ActionContext<MusicalState, RootState>, request: { item: ItemData, key: string }): Promise<void> => {
    const databaseRef = firebase.database().ref(path)
    state.musicals[request.key] = request.item
    await databaseRef.update(state.musicals)
}

const getters = {
    getSeenMusicals,
    getUnseenMusicals
}

const mutations = {
    setMusicals
}

const actions = {
    loadMusicals,
    loadSuggestions,
    addMusical,
    update,
    loadPoster
}

const state: MusicalState = {
    musicals: {}
}

const musicalsModule: Module<MusicalState, RootState> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}

export default musicalsModule
