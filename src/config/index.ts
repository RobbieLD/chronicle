export default class ChronicleConfig {
    public static ToastLifeSpan = 5000
    public static PosterHeight = 400

    public static MovieDbKey = process.env?.VUE_APP_MOVIE_DB_KEY
    public static FirebaseConfig: Record<string, string> = {
        apiKey: process.env?.VUE_APP_FIREBASE_API_KEY,
        authDomain: process.env?.VUE_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env?.VUE_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env?.VUE_APP_FIREBASE_STOREAGE_BUCKET,
        messagingSenderId: process.env?.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
        appId: process.env?.VUE_APP_FIREBASE_APP_ID
    }

    public static UnsplashApiKey = process.env?.VUE_APP_UNSPLASH_API_KEY
}

export enum ActionButtonPosition {
    left = 1,
    right = 0
}
