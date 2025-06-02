import { createI18n } from 'vue-i18n'

const loadLocale = async (locale: string) => {
  const messages = await import(`./locales/${locale}.json`)
  return messages.default
}

const messages = {
  en: await loadLocale('en'),
  de: await loadLocale('de'),
}

export default createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: 'en',
  allowComposition: true,
  messages,
})
