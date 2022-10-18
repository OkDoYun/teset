import { I18nextProvider } from 'react-i18next'

import { MusmaProvider } from '@musma/react-component'

import i18n from 'src/i18n'

import { AppRouter } from './routes'

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <MusmaProvider>
        <AppRouter />
      </MusmaProvider>
    </I18nextProvider>
  )
}
