import { createI18n } from 'vue-i18n'
import en from './locale/en'
import pl from './locale/pl'

const messages = {
  en,
  pl
}

const i18n = createI18n({
  locale: 'pl',
  messages: messages
})

export default i18n
