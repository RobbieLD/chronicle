import ChronicleConfig from '@/config'
import MovieConfiguration from '@/models/movie-configuration'
import MovieSearchResult from '@/models/movie-search'
import { MovieCredits, MovieDetail, MovieImages } from '@/models/movie-view'
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

    public async Details(id: number): Promise<MovieDetail> {
        const results = await this.http.get<MovieDetail>(`movie/${id}?api_key=${ChronicleConfig.MovieDbKey}&language=en-US`)
        return results.data
    }

    public async Images(id: number): Promise<MovieImages> {
        const results = await this.http.get<MovieImages>(`movie/${id}/images?api_key=${ChronicleConfig.MovieDbKey}`)
        return results.data
    }

    public async Credits(id: number): Promise<MovieCredits> {
        const results = await this.http.get<MovieCredits>(`movie/${id}/credits?api_key=${ChronicleConfig.MovieDbKey}&language=en-US`)
        return results.data
    }
}
