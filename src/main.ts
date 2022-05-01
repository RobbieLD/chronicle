import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, storeKey } from './store'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import { sentance } from './directives/sentance.directive'

import 'primevue/resources/themes/saga-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

createApp(App)
    .use(store, storeKey)
    .use(router)
    .use(PrimeVue)
    .use(ToastService)
    .directive('tooltip', Tooltip)
    .directive('sentance-case', sentance)
    .mount('#app')
