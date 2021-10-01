import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import RootState from '../states/root.state'
import UIState from '../states/ui.state'

export default class UIModule implements Module<UIState, RootState> {    

    public state(): UIState {
        return {
            addPanelOpen: false,
            title: '',
            background: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80'
        }
    }

    public namespaced?: boolean = true

    public getters: GetterTree<UIState, RootState> = {
        
    }

    public mutations: MutationTree<UIState> = {
        setAddPanelOpen: this.setAddPanelOpen,
        setTitle: this.setTitle,
        setBackground: this.setBackground
    }

    public actions: ActionTree<UIState, RootState> = {
        
    }

    // Mutations
    private setAddPanelOpen (state: UIState, open: boolean): void {
        state.addPanelOpen = open
    }

    private setTitle (state: UIState, title: string): void {
        state.title = title
    }

    private setBackground (state: UIState, background: string): void {
        state.background = background
    }
}
