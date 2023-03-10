import {
  Navigate,
  Outlet,
  Route,
  Routes as ReactRoutes,
} from 'react-router-dom'
import { Home } from '../src/components/home/home'
import { Register } from '../src/components/register/register'
import { Login } from '../src/components/login/login'
import { useAuth } from '../src/providers/auth/authPovider'

export const AuthorizedRoutes = () => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" />

  return <Outlet />
}

export const UnauthorizedRoutes = () => {
  const { user } = useAuth()

  if (user) return <Navigate to="/home" />
  return <Outlet />
}

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<AuthorizedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
      <Route element={<UnauthorizedRoutes />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </ReactRoutes>
  )
}
