import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID
}

const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

class Firebase {
  app: firebase.app.App
  auth: firebase.auth.Auth
  githubProvider: firebase.auth.GithubAuthProvider

  constructor() {
    this.app = firebase.initializeApp(config)
    this.auth = firebase.auth()

    this.githubProvider = new firebase.auth.GithubAuthProvider()
    this.githubProvider.addScope('repo user admin:org notifications')
  }

  doSignInWithGithub = (): Promise<firebase.auth.UserCredential> =>
    this.auth.signInWithPopup(this.githubProvider)

  doSignOut = (): Promise<void> => this.auth.signOut()

  firebase = (): firebase.app.App => this.app

  baseAuth = (): firebase.auth.Auth => this.auth
}

export default Firebase
