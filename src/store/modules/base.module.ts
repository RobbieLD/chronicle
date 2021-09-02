import ItemData from '@/models/item'
import firebase from 'firebase/app'
import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import BaseState from '../states/base.state'
import RootState from '../states/root.state'

// Note because of the way the vuex store works I can't find a way to have instance variables
// in this class which are still avaliable to the methods at run time. That's why the filter
// method is not part of the class
export default abstract class BaseModule<T extends BaseState> implements Module<T, RootState> {
    public namespaced?: boolean = true

    public abstract state(): T

    public abstract getters: GetterTree<T, RootState> = {
        getRatedItems: this.getRatedItems,
        getUnratedItems: this.getUnratedItems
    }


    public abstract actions: ActionTree<T, RootState> = {
        loadItems: this.loadItems,
        addItem: this.addItem,
        updateItem: this.updateItem
    }

    public abstract mutations: MutationTree<T> = {
        setItems: this.setItems
    }

    // Getters
    private getRatedItems(state: T): Record<string, ItemData> {
        if (state.items) {
            return filtered(state, (item) => item.year > 0)
        } else {
            return {}
        }
    }

    private getUnratedItems(state: T): Record<string, ItemData> {
        if (state.items) {
            return filtered(state, (item) => item.year === 0)
        } else {
            return {}
        }
    }

    // Mutations
    private setItems(state: T, items: Record<string, ItemData>): void {
        state.items = items
    }

    // Actions
    private async loadItems({ state, commit }: ActionContext<T, RootState>): Promise<void> {
        const databaseRef = firebase.database().ref(state.dataPath)
        databaseRef.on('value', (snapshot) => {
            commit('setItems', snapshot.val())
        })
    }

    private async addItem({ state }: ActionContext<T, RootState>, movie: ItemData): Promise<void> {
        const databaseRef = firebase.database().ref(state.dataPath)
        await databaseRef.push(movie)
    }

    private async updateItem({ state }: ActionContext<T, RootState>, request: { item: ItemData, key: string }): Promise<void> {
        const databaseRef = firebase.database().ref(state.dataPath)
        state.items[request.key] = request.item
        await databaseRef.update(state.items)
    }
}


// Helpers
const filtered = <T extends BaseState>(state: T, test: (item: ItemData) => boolean) => {
    return Object.keys(state.items)
        .filter(key => test(state.items[key]))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: state.items[key]
            }
        }, {})
}
