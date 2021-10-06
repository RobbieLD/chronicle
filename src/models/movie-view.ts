export interface MovieDetail {
    title: string,
    backdrop_path: string,
    release_date: string,
    poster_path: string
    budget: string,
    overview: string,
    revenue: number,
    runtime: number
}

export interface MovieImages {
    posters: MovieImage[]
}

export interface MovieCredits {
    cast: MovieCredit[]
    crew: MovieCredit[]
}

interface MovieCredit {
    name: string
    profile_path: string
    character: string
    known_for_department: string 
}

interface MovieImage {
    file_path: string
    iso_639_1: string
    vote_count: number
    vote_average: number
}

interface MoviePerson {
    name: string
    profile: string
    job: string
}

export interface MoviePoster {
    poster: string
    thumbnail: string
    rating: number
    language: string
}

export default class MovieView {
    title: string
    posters: MoviePoster[]
    release: Date
    earning: string
    runtime: string
    description: string
    people: MoviePerson[]
    backdrop: string
    director: string

    constructor(movie: MovieDetail, credits: MovieCredits, images: MovieImages, baseImageUrl: string, imageSizes: string[]) {
        this.title = movie.title
        this.release = new Date(movie.release_date)

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })

        this.earning = formatter.format(movie.revenue)
        const hours = Math.floor(movie.runtime / 60)          
        const minutes = movie.runtime % 60
        this.runtime = `${hours}'${minutes}"`
        this.description = movie.overview
        this.backdrop = `${baseImageUrl}/${imageSizes[imageSizes.length - 1]}/${movie.backdrop_path}`

        this.posters = images.posters.map(p => {
            return {
                poster: `${baseImageUrl}/${imageSizes[4]}/${p.file_path}`,
                thumbnail: `${baseImageUrl}/${imageSizes[1]}/${p.file_path}`,
                language: p.iso_639_1,
                rating: p.vote_average
            }
        })

        this.people = credits.cast.map(c => {
            return {
                name: c.name,
                job: c.character,
                profile: c.profile_path ? `${baseImageUrl}/${imageSizes[1]}/${c.profile_path}` : ''
            }
        })

        this.director = credits.crew.filter(c => c.known_for_department === 'directing').map(c => c.name).join(',')
    }
}
