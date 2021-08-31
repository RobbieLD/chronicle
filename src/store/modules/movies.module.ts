import { ActionContext, Module } from 'vuex'
import RootState from '../states/root.state'
import firebase from 'firebase/app'
import MovieState from '../states/movies.state'
import MovieSuggestion from '@/models/movie-search'
import MovieService from '@/services/movie.service'
import ItemData from '@/models/item'

const path = '/movies'

// Helpers
const filtered = (state: MovieState, test: (item: ItemData) => boolean) => {
    return Object.keys(state.movies)
        .filter(key => test(state.movies[key]))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: state.movies[key]
            }
        }, {})
}

// Getters
const getSeenMovies = (state: MovieState): Record<string, ItemData> => {
    if (state.movies) {
        return filtered(state, (item) => item.year > 0)
    } else {
        return {}
    }
}

const getUnseenMovies = (state: MovieState): Record<string, ItemData> => {
    if (state.movies) {
        return filtered(state, (item) => item.year === 0)
    } else {
        return {}
    }
}


// Mutations
const setMovies = (state: MovieState, movies: Record<string, ItemData>): void => {
    state.movies = movies
}

const setImageBaseUrl = (state: MovieState, url: string): void => {
    state.imageBaseUrl = url
}

const setImageSizes = (state: MovieState, sizes: string[]): void => {
    state.imageSizes = sizes
}


// Actions
const loadMovies = async ({ commit }: ActionContext<MovieState, RootState>): Promise<void> => {
    const databaseRef = firebase.database().ref(path)
    databaseRef.on('value', (snapshot) => {
        commit('setMovies', snapshot.val())
    })
}

const loadConfiguration = async ({ commit }: ActionContext<MovieState, RootState>): Promise<void> => {
    const service = new MovieService()
    const results = await service.Configuration()
    commit('setImageBaseUrl', results.images.base_url)
    commit('setImageSizes', results.images.poster_sizes)
}

const loadSuggestions = async ({ state }: ActionContext<MovieState, RootState>, query: string): Promise<MovieSuggestion[]> => {
    const service = new MovieService()
    const results = await service.Search(query)
    // No need to store this as we're only using it for generating the drop down
    return results.results.map<MovieSuggestion>((r) => new MovieSuggestion(r, state.imageBaseUrl, state.imageSizes))
}

const addMovie = async (_: ActionContext<MovieState, RootState>, movie: ItemData): Promise<void> => {
    const databaseRef = firebase.database().ref(path)
    await databaseRef.push(movie)
}

const getters = {
    getSeenMovies,
    getUnseenMovies
}

const mutations = {
    setMovies,
    setImageBaseUrl,
    setImageSizes
}

const actions = {
    loadMovies,
    loadConfiguration,
    loadSuggestions,
    addMovie
}

const state: MovieState = {
    movies: {},
    imageBaseUrl: '',
    imageSizes: []
}

const moviesModule: Module<MovieState, RootState> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}

export default moviesModule
