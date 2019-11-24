import { ADD_USER, UPDATE_USER } from '../actionTypes'

const initialState = {
  loggedIn: false,
  userName: '',
  userId: '',
  userDescription: '',
  countries: []
}

interface ActionInterface {
  type: string
  payload: {
    loggedIn: boolean
    userName: string
    userId: string
    userDescription: string
    countries: never[]
  }
}

interface PayloadExport {
  loggedIn: boolean
  userName: string
  userId: string
  userDescription: string
  countries: never[]
}

export default (
  state = initialState,
  action: ActionInterface
): PayloadExport => {
  switch (action.type) {
    case ADD_USER: {
      return {
        loggedIn: action.payload.loggedIn,
        userName: action.payload.userName,
        userId: action.payload.userId,
        userDescription: action.payload.userDescription,
        countries: action.payload.countries
      }
    }
    case UPDATE_USER: {
      return {
        loggedIn: state.loggedIn,
        userName: action.payload.userName,
        userId: state.userId,
        userDescription: action.payload.userDescription,
        countries: action.payload.countries
      }
    }
    default:
      return state
  }
}
