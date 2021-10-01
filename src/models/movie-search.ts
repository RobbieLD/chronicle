interface Result {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface MovieImage {
    url: string,
    width: number
}

export default class MovieSuggestion {
    public name: string
    public poster: MovieImage
    public rating: number
    public id: number
    constructor(result: Result, baseImageUrl: string, imageSizes: string[]) {
        let year = '0'
        
        if (result.release_date) {
            year = result.release_date?.split('-')[0]
        }
        
        this.id = result.id
        this.name = `${result.title} (${year})`
        this.rating = result.vote_average * 10
        this.poster = {
            url: `${baseImageUrl}/${imageSizes[2]}/${result.poster_path}`,
            width: Number.parseInt(imageSizes[2].split('w')[1])
        }
    }
}

export default interface MovieSearchResult {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}
