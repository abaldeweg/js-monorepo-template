import { createUi } from '@baldeweg/ui'
import { createApp } from 'vue'
import { registerSW } from 'virtual:pwa-register'
import App from './App.vue'
import router from './router/index.js'
import i18n from './i18n.js'
import '@baldeweg/ui/styles'
import { createHead } from '@unhead/vue'

const ui = createUi()
const app = createApp(App)
const head = createHead()

app.use(ui)
app.use(i18n)
app.use(router)
app.use(head)

registerSW()

app.mount('#app')
