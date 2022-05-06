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
        }
    }

    public namespaced?: boolean = true

    public getters: GetterTree<UIState, RootState> = {
        
    }

    public mutations: MutationTree<UIState> = {
        setAddPanelOpen: this.setAddPanelOpen,
        setTitle: this.setTitle,
        setBackground: this.setBackground,
        setSettingsPanelOpen: this.setSettingsPanelOpen
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

    // Actions
    private async loadBackground ({ commit }: ActionContext<UIState, RootState>): Promise<void> {
        const service = new UnsplashService()
        const url = await service.GetRandomPhoto()
        commit('setBackground', url)
    }
}
