import ChronicleConfig from '@/config'
import RandomImage from '@/models/random-image'
import BaseService from './base.service'

export default class UnsplashService extends BaseService {
    constructor() {
        super('https://api.unsplash.com/')
    }

    public async GetRandomPhoto(): Promise<string> {
        const results = await this.http.get<RandomImage>(`photos/random/?query=peaceful&orientation=landscape&client_id=${ChronicleConfig.UnsplashApiKey}&client_id=${process.env?.VUE_APP_UNSPLASH_API_KEY}`)
        return `${results.data.links.download}&auto=format&fit=crop&q=80`
    }
}
