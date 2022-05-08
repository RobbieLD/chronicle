import UnsplashService from '@/services/unsplash.service'
import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import RootState from '../states/root.state'
import UIState from '../states/ui.state'

export default class UIModule implements Module<UIState, RootState> {    

    public state(): UIState {
        return {
            addPanelOpen: false,
            settingsPanelOpen: false,
            title: '',
            background: '',
            backgroundLocation: ''
        }
    }

    public namespaced?: boolean = true

    public getters: GetterTree<UIState, RootState> = {
        
    }

    public mutations: MutationTree<UIState> = {
        setAddPanelOpen: this.setAddPanelOpen,
        setTitle: this.setTitle,
        setBackground: this.setBackground,
        setSettingsPanelOpen: this.setSettingsPanelOpen,
        setBackgroundLocation: this.setBackgroundLocation
    }

    public actions: ActionTree<UIState, RootState> = {
        loadBackground: this.loadBackground
    }

    // Mutations
    private setAddPanelOpen (state: UIState, open: boolean): void {
        state.addPanelOpen = open
    }

    private setSettingsPanelOpen (state: UIState, open: boolean): void {
        state.settingsPanelOpen = open
    }

    private setTitle (state: UIState, title: string): void {
        state.title = title
    }

    private setBackground (state: UIState, background: string): void {
        state.background = background
    }

    private setBackgroundLocation (state: UIState, backgroundLocation: string): void {
        state.backgroundLocation = backgroundLocation
    }

    // Actions
    private async loadBackground ({ commit }: ActionContext<UIState, RootState>, query: string): Promise<void> {
        const service = new UnsplashService()
        const background = await service.GetRandomPhoto(query)
        commit('setBackground', background.links.download)
        commit('setBackgroundLocation', background.location.name || background.description)
    }
}
