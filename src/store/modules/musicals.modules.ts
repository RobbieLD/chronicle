import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'
import RootState from '../states/root.state'
import MusicalState from '../states/musicals.state'
import MusicalService from '@/services/musical.service'
import { Thumbnail } from '@/models/musical-poster'
import MusicalSuggestion from '@/models/musical-search'
import BaseModule from './base.module'

export default class MusicalModule extends BaseModule<MusicalState> {    
        
    public state(): MusicalState {
        return {
            items: {},
            dataPath: '/musicals'
        }
    }

    public getters: GetterTree<MusicalState, RootState> = {
        ...this.getters
    }

    public mutations: MutationTree<MusicalState> = {
        ...this.mutations,
    }

    public actions: ActionTree<MusicalState, RootState> = {
        ...this.actions,
        loadPoster: this.loadPoster,
        loadSuggestions: this.loadSuggestions
    }

    private async loadSuggestions (_: ActionContext<MusicalState, RootState>, query: string): Promise<MusicalSuggestion[]> {
        const service = new MusicalService()
        const results = await service.Search(query)
        return results.query.search.map<MusicalSuggestion>(r => new MusicalSuggestion(r))
    }
    
    private async loadPoster (_: ActionContext<MusicalState, RootState>, title: string): Promise<Thumbnail> {
        const service = new MusicalService()
        const results = await service.Details(title)
        return Object.values(results.query.pages)[0].thumbnail
    }
    

}
