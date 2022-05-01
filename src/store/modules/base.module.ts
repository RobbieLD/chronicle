import ChronicleConfig from '@/config'
import ItemData from '@/models/item'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, push, remove, update } from 'firebase/database'
import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import BaseState, { GraphData, ItemStats } from '../states/base.state'
import RootState from '../states/root.state'

// Note because of the way the vuex store works I can't find a way to have instance variables
// in this class which are still avaliable to the methods at run time. That's why the filter
// method is not part of the class
export default abstract class BaseModule<T extends BaseState> implements Module<T, RootState> {
    public namespaced?: boolean = true
    private firebase: FirebaseApp = initializeApp(ChronicleConfig.FirebaseConfig)
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
        updateItem: this.updateItem,
        removeItem: this.removeItem
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
            }, {})
        }

        const groups = groupBy(items, i => i.year)
        const labels = []
        const data = []

        for (const groupKey of Object.keys(groups)) {
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
        const module = state.dataPath.substring(1, state.dataPath.length)
        if (!items.length) {
            return {
                module
            }
        }

        const stat = (check: (m: number, n: ItemData) => number) => items.reduce<number>((a: number, b: ItemData) => {
            return check(a, b)
        }, 100)

        const max = stat((a: number, b: ItemData): number => {
            return a > b.myRating ? a : b.myRating
        })

        const min = stat((a: number, b: ItemData): number => {
            return b.myRating < a && b.myRating > 0 ? b.myRating : a
        })

        const maxNames = items.filter(i => i.myRating == max).map<string>(t => t.name).join(', ')
        const minNames = items.filter(i => i.myRating == min).map<string>(t => t.name).join(', ')

        return {
            maxRating: max,
            averageRating: Math.round(items.reduce((a, b) => (a + b.myRating), 0) / items.length),
            maxName: maxNames,
            minName: minNames,
            minRating: min,
            totalItems: `${items.filter(i => i.myRating > 0).length}/${items.filter(i => i.myRating === 0).length}`,
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
            const databaseRef = ref(getDatabase(this.firebase), state.dataPath)
            onValue(databaseRef, (snapshot) => {
                commit('setItems', snapshot.val())
            })
        }
    }

    private async addItem({ state }: ActionContext<T, RootState>, item: ItemData): Promise<void> {
        const databaseRef = ref(getDatabase(this.firebase), state.dataPath)
        await push(databaseRef, item)
    }

    private async removeItem({ state }: ActionContext<T, RootState>, key: string): Promise<void> {
        await remove(ref(getDatabase(this.firebase),`${state.dataPath}/${key}`))
    }

    private async updateItem({ state }: ActionContext<T, RootState>, request: { item: ItemData, key: string }): Promise<void> {
        const databaseRef = ref(getDatabase(this.firebase), state.dataPath)
        state.items[request.key] = request.item
        await update(databaseRef, state.items)
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
