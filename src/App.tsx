import { I18nextProvider } from 'react-i18next'

import { RecoilRoot } from 'recoil'

import i18n from 'src/i18n'
import { GlobalStyles } from 'src/styles'

import { AppRouter } from './routes'

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <GlobalStyles />
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </I18nextProvider>
  )
}
