import ItemData from '@/models/item';

export default interface MovieState {
    movies: Record<string, ItemData>,
    imageBaseUrl: string,
    imageSizes: string[]
}
