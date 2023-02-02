import { format } from 'date-fns'
import { uk, en } from 'date-fns/locale';

const locales = {uk, en}

export function dateFormat(date, formatStr = 'PP') {
  return format(date, formatStr, {
    locale: locales[global.__localeId__] // or window.__localeId__
  })
}
