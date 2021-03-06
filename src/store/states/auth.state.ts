import Settings from '@/models/settings'
import { User } from 'firebase/auth'

export default interface AuthState {
    user: User | null,
    error: Error | null,
    ready: boolean,
    settings: Settings
}
