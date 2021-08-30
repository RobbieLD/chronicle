import { ActionContext, Module } from 'vuex'
import RootState from '../states/root.state'
import firebase from 'firebase/app'
import MovieState from '../states/movies.state'
import { MovieData } from '@/models/movie-search'

const path = '/movies'

// Getters
const getSeenMovies = (state: MovieState): MovieData[] => {
    if (state.movies) {
        return Object.values(state.movies).filter(m => m.year)
    } else {
        return []
    }
}

const getUnseenMovies = (state: MovieState): MovieData[] => {
    if (state.movies) {
        return Object.values(state.movies).filter(m => !m.year)
    } else {
        return []
    }
}

// Mutations
const setMovies = (state: MovieState, movies: Record<string, MovieData>): void => {
    state.movies = movies
}


// Actions
const loadMovies = async ({ commit }: ActionContext<MovieState, RootState>): Promise<void> => {
    const databaseRef = firebase.database().ref(path)
    databaseRef.on('value', (snapshot) => {
        commit('setMovies', snapshot.val())
    })
}

const getters = {
    getSeenMovies,
    getUnseenMovies
}

const mutations = {
    setMovies
}

const actions = {
    loadMovies
}

const state: MovieState = {
    movies: {}
}

const moviesModule: Module<MovieState, RootState> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}

export default moviesModule
