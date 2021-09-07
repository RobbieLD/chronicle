import ItemData from '@/models/item'

export interface ItemStats {
    totalItems?: number,
    maxRating?: number,
    maxName?: string,
    minRating?: number,
    minName?: string,
    averageRating?: number,
    module: string
}

export default interface BaseState {
    items: Record<string, ItemData>,
    dataPath: string
}
