import ItemData from '@/models/item'

export default interface BaseState {
    items: Record<string, ItemData>,
    dataPath: string
}
