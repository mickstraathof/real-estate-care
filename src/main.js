import { createApp } from 'vue'
import App from './App.vue'

//import store
import store from './store'

//import router
import router from "@/router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faUserSecret,
    faHome,
    faGears,
    faInfinity,
    faInbox,
    faInfo,
    faFileCircleCheck
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faHome, faGears, faInbox, faInfo, faInfinity, faFileCircleCheck)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(vuetify).use(router).use(store).mount('#app')
