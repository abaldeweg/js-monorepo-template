import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

const loadLocale = async (locale: string) => {
  const messages = await import(`./locales/${locale}.json`)
  return messages.default
}

const messages = {
  en,
  de,
}

export default createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: 'en',
  allowComposition: true,
  messages,
})
