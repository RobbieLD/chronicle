import ChronicleConfig from '@/config'
import MovieConfiguration from '@/models/movie-configuration'
import MovieSearchResult from '@/models/movie-search'
import BaseService from './base.service'

export default class MovieService extends BaseService {
    constructor() {
        super('https://api.themoviedb.org/3/')
    }

    public async Configuration(): Promise<MovieConfiguration> {
        const results = await this.http.get<MovieConfiguration>(`configuration?api_key=${ChronicleConfig.MovieDbKey}`)
        return results.data
    }

    public async Search(query: string): Promise<MovieSearchResult> {
        const results = await this.http.get<MovieSearchResult>(`search/movie?api_key=${ChronicleConfig.MovieDbKey}&language=en-US&query='${query}'&page=1&include_adult=false`)
        return results.data
    }
}
