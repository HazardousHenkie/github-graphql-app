import { createContext } from 'react'

interface AuthenticatedState {
  authenticated: boolean
  user: {
    userName: string
    userId: string
    authToken: Record<string, any> | null
  }
  logIn(data: Record<string, any>): void
  logOut(): void
}

const AuthUserContext = createContext<AuthenticatedState>({
  authenticated: false,
  user: {
    userName: '',
    userId: '',
    authToken: null
  },
  logIn: (): void => {},
  logOut: (): void => {}
})

export default AuthUserContext
