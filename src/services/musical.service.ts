import ChronicleConfig from '@/config'
import MusicalPoster from '@/models/musical-poster'
import MusicalSearchResult from '@/models/musical-search'
import BaseService from './base.service'

export default class MusicalService extends BaseService {
    constructor() {
        super('https://en.wikipedia.org')
    }

    public async Search(query: string): Promise<MusicalSearchResult> {
        const results = await this.http.get<MusicalSearchResult>(`w/api.php?origin=*&action=query&list=search&prop=info&srsearch=${query}&format=json`)
        return results.data
    }

    public async Details(title: string): Promise<MusicalPoster> {
        const results = await this.http.get<MusicalPoster>(`w/api.php?origin=*&action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=${ChronicleConfig.PosterHeight}&pilicense=any`)
        return results.data
    }
}
