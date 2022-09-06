import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface AuthMainProps {
  children: ReactNode
}

export const AuthMain = ({ children }: AuthMainProps) => {
  const { t } = useTranslation()

  return <main>{children}</main>
}
