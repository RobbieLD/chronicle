import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import RootState from '../states/root.state'
import MovieState from '../states/movies.state'
import MovieSuggestion from '@/models/movie-search'
import MovieService from '@/services/movie.service'
import BaseModule from './base.module'
import MovieView from '@/models/movie-view'
import ItemData from '@/models/item'

export default class MovieModule extends BaseModule<MovieState> {
    
    public state(): MovieState {
        return {
            items: {},
            imageBaseUrl: '',
            imageSizes: [],
            dataPath: 'movies',
            userId: ''
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
        loadSuggestions: this.loadSuggestions,
        loadMovieView: this.loadMovieView
    }

    protected async Preprocess(_: ActionContext<MovieState, RootState>, item: ItemData): Promise<ItemData> {
        // This means that a rating wasn't available when this item
        // was originally added to the database so we can update it now
        console.log(item.globalRating)
        if (item.globalRating < 0) {
            const service = new MovieService()
            const results = await service.Details(item.id)
            item.globalRating = results.vote_average * 10
        }

        return item
    }

    // Actions
    private async loadConfiguration({ state, commit }: ActionContext<MovieState, RootState>): Promise<void> {
        if (!state.imageBaseUrl) {
            const service = new MovieService()
            const results = await service.Configuration()
            commit('setImageBaseUrl', results.images.secure_base_url)
            commit('setImageSizes', results.images.poster_sizes)
        }
    }

    private async loadMovieView({ state }: ActionContext<MovieState, RootState>, id: number): Promise<MovieView> {
        const service = new MovieService()
        const details = await service.Details(id)
        const credits = await service.Credits(id)
        const images = await service.Images(id)
        return new MovieView(details, credits, images, state.imageBaseUrl, state.imageSizes)
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
