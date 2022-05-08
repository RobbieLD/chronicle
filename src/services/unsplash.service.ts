import ChronicleConfig from '@/config'
import RandomImage from '@/models/random-image'
import BaseService from './base.service'

export default class UnsplashService extends BaseService {
    constructor() {
        super('https://api.unsplash.com/')
    }

    public async GetRandomPhoto(): Promise<RandomImage> {
        const results = await this.http.get<RandomImage>(`photos/random/?query=peaceful&orientation=landscape&client_id=${ChronicleConfig.UnsplashApiKey}`)
        return results.data
    }
}
