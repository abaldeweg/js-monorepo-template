import { createUi } from '@baldeweg/ui'
import i18n from './i18n'
import '@baldeweg/ui/styles'
import { createHead } from '@unhead/vue/client'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const ui = createUi()
const app = createApp(App)
const head = createHead({
  init: [
    {
      title: 'Home',
      titleTemplate: '%s - js-monorepo-template',
      htmlAttrs: { lang: navigator.language }
    },
  ]
})

app.use(ui)
app.use(i18n)
app.use(router)
app.use(head)

app.mount('#app')
