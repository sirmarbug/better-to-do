import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import i18n from './plugins/i18n'

// PRIMEVUE CSS
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './styles/styles.scss'
import './styles/typography.scss'

createApp(App).use(PrimeVue).use(i18n).use(store).use(router).mount('#app')
