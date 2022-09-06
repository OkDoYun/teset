import { lazy } from 'react'

const SignInPage = lazy(() => import('src/pages/Auth/SignIn'))
const SignUpPage = lazy(() => import('src/pages/Auth/SignUp'))
const FindPasswordPage = lazy(() => import('src/pages/Auth/FindPassword'))
const HomePage = lazy(() => import('src/pages/General/Home'))
const UsersPage = lazy(() => import('src/pages/General/Users'))
const UserInfoPage = lazy(() => import('src/pages/General/UserInfo'))

export const AppRoutes = {
  SignIn: {
    path: '/sign-in',
    component: <SignInPage />,
  },
  SignUp: {
    path: '/sign-up',
    component: <SignUpPage />,
  },
  FindPassword: {
    path: '/find-password',
    component: <FindPasswordPage />,
  },
  Home: {
    path: '/home',
    component: <HomePage />,
  },
  Users: {
    path: '/users',
    component: <UsersPage />,
  },
  UserInfo: {
    path: '/users/:id',
    component: <UserInfoPage />,
  },
}
