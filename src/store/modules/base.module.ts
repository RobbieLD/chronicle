import ItemData from '@/models/item'
import { checkCompatEnabled } from '@vue/compiler-core'
import firebase from 'firebase/app'
import { mixins } from 'vue-class-component'
import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import BaseState, { GraphData, ItemStats } from '../states/base.state'
import RootState from '../states/root.state'

// Note because of the way the vuex store works I can't find a way to have instance variables
// in this class which are still avaliable to the methods at run time. That's why the filter
// method is not part of the class
export default abstract class BaseModule<T extends BaseState> implements Module<T, RootState> {
    public namespaced?: boolean = true

    private isLoaded = false

    public abstract state(): T

    public getters: GetterTree<T, RootState> = {
        getRatedItems: this.getRatedItems,
        getUnratedItems: this.getUnratedItems,
        getStats: this.getStats,
        getGraphData: this.getGraphData
    }


    public actions: ActionTree<T, RootState> = {
        loadItems: this.loadItems,
        addItem: this.addItem,
        updateItem: this.updateItem
    }

    public mutations: MutationTree<T> = {
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

    private getGraphData(state: T): GraphData {
        const items = Object.values(state.items)

        const groupBy = (array: ItemData[], keyFn: (item: ItemData) => string | number) => {
            return array.reduce((result: Record<string | number, ItemData[]>, currentValue: ItemData) => {
                const key = keyFn(currentValue)
                if (result[key]) {
                    result[key].push(currentValue)
                }
                else {
                    result[key] = [currentValue]
                }

                return result
            },{})
        }

        const groups = groupBy(items, i => i.year)
        const labels = []
        const data = []

        for(const groupKey of Object.keys(groups)) {
            if (groupKey > '0') {
                labels.push(groupKey)
                data.push({
                    x: groups[groupKey].length,
                    y: groupKey
                })
            }
        }

        return {
            data,
            labels
        }
    }

    private getStats(state: T): ItemStats {
        const items = Object.values(state.items)
        const module = state.dataPath.substr(1, state.dataPath.length)
        if (!items.length) {
            return {
                module
            }
        }

        const stat = (check: (m: any, n: any) => NameValuePair) => items.reduce<NameValuePair>((a: NameValuePair, b: ItemData) => {
            const result = check(a,b)
            return {
                name: result.name,
                value: result.value
            }
        },
        {
            name: '',
            value: 100
        })

        const max = stat((a: NameValuePair, b: ItemData) => {
            return {
                name: a.value > b.myRating ? a.name : b.name,
                value: a.value > b.myRating ? a.value : b.myRating
            }
        })

        const min = stat((a: NameValuePair, b: ItemData) => {
            return {
                name: b.myRating < a.value && b.myRating > 0 ? b.name : a.name,
                value: b.myRating < a.value && b.myRating > 0 ? b.myRating : a.value
            }
        })
        
        return {
            maxRating: max.value,
            averageRating: Math.round(items.reduce((a ,b) => (a + b.myRating), 0) / items.length),
            maxName: max.name,
            minName: min.name,
            minRating: min.value,
            totalItems: items.length,
            module
        }
    }

    // Mutations
    private setItems(state: T, items: Record<string, ItemData>): void {
        state.items = items
    }

    // Actions
    private async loadItems({ state, commit }: ActionContext<T, RootState>): Promise<void> {
        // No need to subscribe again
        if (!Object.keys(state.items).length) {
            const databaseRef = firebase.database().ref(state.dataPath)
            databaseRef.on('value', (snapshot) => {
                commit('setItems', snapshot.val())
            })        
        }
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
        .sort((fKey, sKey) => state.items[sKey].year - state.items[fKey].year)
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: state.items[key]
            }
        }, {})
}


interface NameValuePair {
    name: string,
    value: number
}
