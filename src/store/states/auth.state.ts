import firebase from 'firebase/app'

export default interface AuthState {
    user: firebase.User | null,
    error: Error | null,
    ready: boolean
}
