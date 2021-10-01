import AuthState from './auth.state'
import MovieState from './movies.state'
import MusicalState from './musicals.state'
import UIState from './ui.state'

export default interface RootState {
    auth: AuthState,
    movies: MovieState,
    ui: UIState,
    musicals: MusicalState
}
