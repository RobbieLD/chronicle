import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import RootState from '../states/root.state'
import MovieState from '../states/movies.state'
import MovieSuggestion from '@/models/movie-search'
import MovieService from '@/services/movie.service'
import BaseModule from './base.module'

export default class MovieModule extends BaseModule<MovieState> {
    
    public state(): MovieState {
        return {
            items: {},
            imageBaseUrl: '',
            imageSizes: [],
            dataPath: '/movies'
        }
    }

    public getters: GetterTree<MovieState, RootState> = {
        ...this.getters
    }

    public mutations: MutationTree<MovieState> = {
        ...this.mutations,
        setImageBaseUrl: this.setImageBaseUrl,
        setImageSizes: this.setImageSizes
    }

    public actions: ActionTree<MovieState, RootState> = {
        ...this.actions,
        loadConfiguration: this.loadConfiguration,
        loadSuggestions: this.loadSuggestions
    }


    // Actions
    private async loadConfiguration({ commit }: ActionContext<MovieState, RootState>): Promise<void> {
        const service = new MovieService()
        const results = await service.Configuration()
        commit('setImageBaseUrl', results.images.base_url)
        commit('setImageSizes', results.images.poster_sizes)
    }

    private async loadSuggestions({ state }: ActionContext<MovieState, RootState>, query: string): Promise<MovieSuggestion[]> {
        const service = new MovieService()
        const results = await service.Search(query)
        // No need to store this as we're only using it for generating the drop down
        return results.results.map<MovieSuggestion>((r) => new MovieSuggestion(r, state.imageBaseUrl, state.imageSizes))
    }

    // Mutations
    private setImageBaseUrl(state: MovieState, url: string): void {
        state.imageBaseUrl = url
    }

    private setImageSizes(state: MovieState, sizes: string[]): void {
        state.imageSizes = sizes
    }
}
