import { MovieData } from '@/models/movie-search';

export default interface MovieState {
    movies: Record<string, MovieData>
}
