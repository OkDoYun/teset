import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface AppMainProps {
  children: ReactNode
}

export const AppMain = ({ children }: AppMainProps) => {
  const { t } = useTranslation()

  return <main>{children}</main>
}
