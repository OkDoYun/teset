import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AppRoutes } from './AppRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.SignIn.path} element={AppRoutes.SignIn.component} />
        <Route path={AppRoutes.SignUp.path} element={AppRoutes.SignUp.component} />
        <Route path={AppRoutes.FindPassword.path} element={AppRoutes.FindPassword.component} />
        <Route path={AppRoutes.Home.path} element={AppRoutes.Home.component} />
        <Route path={AppRoutes.Users.path} element={AppRoutes.Users.component} />
        <Route path={AppRoutes.UserInfo.path} element={AppRoutes.UserInfo.component} />
        <Route path="*" element={<Navigate to={AppRoutes.SignIn.path} />} />
      </Routes>
    </BrowserRouter>
  )
}
