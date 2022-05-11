import ChronicleConfig from '@/config'
import ItemData from '@/models/item'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, push, remove, update } from 'firebase/database'
import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import BaseState, { GraphData, ItemStats } from '../states/base.state'
import RootState from '../states/root.state'

// Note because of the way the vuex store works I can't find a way to have instance variables
// in this class which are still available to the methods at run time. That's why the filter
// method is not part of the class
export default abstract class BaseModule<T extends BaseState> implements Module<T, RootState> {
    public namespaced?: boolean = true
    private firebase: FirebaseApp = initializeApp(ChronicleConfig.FirebaseConfig)

    public abstract state(): T

    // This is a hook for performing processing before the an item is updated
    protected abstract Preprocess({ state }: ActionContext<T, RootState>, item: ItemData): Promise<ItemData>

    public getters: GetterTree<T, RootState> = {
        getRatedItems: this.getRatedItems,
        getUnratedItems: this.getUnratedItems,
        getStats: this.getStats,
        getGraphData: this.getGraphData,
        setUserId: this.setUserId
    }

    public actions: ActionTree<T, RootState> = {
        loadItems: this.loadItems,
        addItem: this.addItem,
        updateItem: this.updateItem,
        removeItem: this.removeItem,
        preprocess: this.Preprocess
    }

    public mutations: MutationTree<T> = {
        setItems: this.setItems,
        setUserId: this.setUserId
    }

    // Getters
    private getRatedItems(state: T): (flagged: boolean) => Record<string, ItemData> {
        return (flagged) => filtered(state, (item) => item.year !== undefined && (!item.flagged || flagged))
    }

    private getUnratedItems(state: T): () => Record<string, ItemData> {
        return () => filtered(state, (item) => item.year === undefined)
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

        const groups = groupBy(items, i => i.year?.getFullYear() || 0)
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

    private setUserId(state: T, userId: string): void {
        state.userId = userId
    }

    // Actions
    private async loadItems({ state, commit }: ActionContext<T, RootState>, userId: string): Promise<void> {
        // No need to subscribe again
        commit('setUserId', userId)
        if (!Object.keys(state.items).length) {
            const databaseRef = ref(getDatabase(this.firebase), `/${state.userId}/${state.dataPath}`)
            onValue(databaseRef, (snapshot) => {
                commit('setItems', snapshot.val())
            })
        }
    }

    private async addItem({ state }: ActionContext<T, RootState>, item: ItemData): Promise<void> {
        const databaseRef = ref(getDatabase(this.firebase), `/${state.userId}/${state.dataPath}`)
        const payload : Omit<ItemData, 'year'> = { ...item }
        await push(databaseRef, { ...payload, year: item.year?.toISOString() || null })
    }

    private async removeItem({ state }: ActionContext<T, RootState>, key: string): Promise<void> {
        await remove(ref(getDatabase(this.firebase),`/${state.userId}/${state.dataPath}/${key}`))
    }

    private async updateItem({ state, dispatch }: ActionContext<T, RootState>, request: { item: ItemData, key: string }): Promise<void> {
        const data = await dispatch('preprocess', request.item)
        const databaseRef = ref(getDatabase(this.firebase), `/${state.userId}/${state.dataPath}`)
        state.items[request.key] = data
        await update(databaseRef, state.items)
    }
}


// Helpers
const filtered = <T extends BaseState>(state: T, test: (item: ItemData) => boolean) => {
    return Object.keys(state.items)
        .filter(key => test(state.items[key]))
        .sort((fKey, sKey) => {
            return new Date(state.items[sKey].year || 0).getTime() - new Date(state.items[fKey].year || 0).getTime()  
        })
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: state.items[key]
            }
        }, {})
}
