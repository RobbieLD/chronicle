import AuthState from './auth.state';
import MovieState from './movies.state';

export default interface RootState {
    auth: AuthState,
    movies: MovieState
}
