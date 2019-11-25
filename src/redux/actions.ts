import { SET_USER } from './actionTypes'

interface UserInfoAddInterface {
  loggedIn: boolean
  userName: string
  userId: string
  authToken: object | null
}

export const setUser = (userInfo: UserInfoAddInterface): object => ({
  type: SET_USER,
  payload: {
    loggedIn: userInfo.loggedIn,
    userName: userInfo.userName,
    userId: userInfo.userId,
    authToken: userInfo.authToken
  }
})
