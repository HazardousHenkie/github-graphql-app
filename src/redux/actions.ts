import { ADD_USER, UPDATE_USER } from './actionTypes'

interface UserInfoAddInterface {
  loggedIn: boolean
  userName: string
  userId: string
  userDescription?: string
  countries?: never[]
}

interface UserInfoUpdateInterface {
  userName: string
  userDescription: string
  countries: never[]
}

export const addUser = (userInfo: UserInfoAddInterface): object => ({
  type: ADD_USER,
  payload: {
    loggedIn: userInfo.loggedIn,
    userName: userInfo.userName,
    userId: userInfo.userId,
    userDescription: userInfo.userDescription,
    countries: userInfo.countries
  }
})

export const updateUser = (userInfo: UserInfoUpdateInterface): object => ({
  type: UPDATE_USER,
  payload: {
    userName: userInfo.userName,
    userDescription: userInfo.userDescription,
    countries: userInfo.countries
  }
})
