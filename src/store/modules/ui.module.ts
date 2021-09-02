import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import RootState from '../states/root.state'
import UIState from '../states/ui.state'

export default class UIModule implements Module<UIState, RootState> {    

    public state(): UIState {
        return {
            addPanelOpen: false
        }
    }

    public namespaced?: boolean = true

    public getters: GetterTree<UIState, RootState> = {
        
    }

    public mutations: MutationTree<UIState> = {
        setAddPanelOpen: this.setAddPanelOpen
    }

    public actions: ActionTree<UIState, RootState> = {
        
    }

    // Mutations
    private setAddPanelOpen (state: UIState, open: boolean): void {
        state.addPanelOpen = open
    }
}
