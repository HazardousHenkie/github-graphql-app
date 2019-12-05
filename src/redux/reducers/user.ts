import { SET_USER } from '../actionTypes'

const initialState = {
  loggedIn: false,
  userName: '',
  userId: '',
  authToken: {}
}

interface ActionInterface {
  type: string
  payload: {
    loggedIn: boolean
    userName: string
    userId: string
    authToken: object
  }
}

interface PayloadExport {
  loggedIn: boolean
  userName: string
  userId: string
  authToken: object
}

export default (
  state = initialState,
  action: ActionInterface
): PayloadExport => {
  switch (action.type) {
    case SET_USER: {
      return {
        loggedIn: action.payload.loggedIn,
        userName: action.payload.userName,
        userId: action.payload.userId,
        authToken: action.payload.authToken
      }
    }
    default:
      return state
  }
}
