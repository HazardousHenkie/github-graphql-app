import { createContext } from 'react'

interface AuthenticatedState {
  authenticated: Boolean
  logIn(data: Record<string, any>): void
  logOut(): void
}

const AuthUserContext = createContext<AuthenticatedState>({
  authenticated: false,
  logIn: (): void => {},
  logOut: (): void => {}
})

export default AuthUserContext
