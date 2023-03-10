import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useLocalStorage('user-profile', null)

  const login = async (data) => {
      // Need to set user
  }

  const register = async (data) => {}

  const value = useMemo(
    () => ({
      user,
      login,
      register,
    }),
    [user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
