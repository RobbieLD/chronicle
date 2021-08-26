import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import firebase from 'firebase/app'
import 'firebase/auth'

import 'primevue/resources/themes/saga-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import ChronicleConfig from './config'

firebase.initializeApp(ChronicleConfig.FirebaseConfig)

createApp(App)
    .use(store, key)
    .use(router)
    .use(PrimeVue)
    .use(ToastService)
    .mount('#app')
