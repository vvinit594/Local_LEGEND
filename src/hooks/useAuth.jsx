import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as authService from '../services/auth'
import {
  clearAuthStorage,
  getStoredUser,
  getToken,
  setStoredUser,
  setToken,
} from '../services/storage'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setTokenState] = useState(() => getToken())
  const [user, setUser] = useState(() => getStoredUser())

  useEffect(() => {
    if (token) {
      setToken(token)
    }
  }, [token])

  useEffect(() => {
    if (user) {
      setStoredUser(user)
    }
  }, [user])

  const isAuthenticated = Boolean(token)

  const login = async (payload) => {
    const result = await authService.login(payload)
    setTokenState(result.token)
    setUser(result.user)
    return result
  }

  const signup = async (payload) => {
    const result = await authService.signup(payload)
    setTokenState(result.token)
    setUser(result.user)
    return result
  }

  const logout = () => {
    clearAuthStorage()
    setTokenState(null)
    setUser(null)
  }

  const value = useMemo(
    () => ({
      token,
      user,
      isAuthenticated,
      login,
      signup,
      logout,
    }),
    [token, user, isAuthenticated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}
