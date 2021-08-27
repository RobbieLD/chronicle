export default class ChronicleConfig {
    public static ToastLifeSpan = 5000
    
    public static Years() : number[] {
        let currentYear = new Date().getUTCFullYear()
        const years = []
        
        while(currentYear > 2014) {
            years.push(currentYear)
            currentYear--
        }

        return years
    }

    public static MovieDbKey = '80f4a53c03c03a82e7a89241913c9843'
    public static FirebaseConfig: Record<string, string> = {
        apiKey: 'AIzaSyBp3gPT_5OI-R8qNDrBuAkwTKO9D8zXIMc',
        authDomain: 'chronicle-39ac8.firebaseapp.com',
        projectId: 'chronicle-39ac8',
        storageBucket: 'chronicle-39ac8.appspot.com',
        messagingSenderId: '112172843873',
        appId: '1:112172843873:web:772af33f9471fb088f3b20'
    }
}
