import ItemData from '@/models/item'

export interface ItemStats {
    totalItems?: string,
    maxRating?: number,
    maxName?: string,
    minRating?: number,
    minName?: string,
    averageRating?: number,
    module: string
}

export interface GraphData {
    data: { x:number, y:string}[],
    labels: string[]
}

export default interface BaseState {
    items: Record<string, ItemData>,
    dataPath: string,
    userId: string
}
