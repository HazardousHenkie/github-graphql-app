import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'

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
  db: firebase.database.Database
  storage: firebase.storage.Storage
  firestore: firebase.firestore.Firestore
  googleProvider: firebase.auth.GoogleAuthProvider

  constructor() {
    this.app = firebase.initializeApp(config)
    this.auth = firebase.auth()
    this.db = firebase.database()
    this.firestore = firebase.firestore()
    this.storage = firebase.storage()

    this.googleProvider = new firebase.auth.GoogleAuthProvider()
  }

  doSignInWithGoogle = (): Promise<firebase.auth.UserCredential> =>
    this.auth.signInWithPopup(this.googleProvider)

  doCreateUserWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> =>
    this.auth.signInWithEmailAndPassword(email, password)

  doPasswordReset = (email: string): Promise<void> =>
    this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = (password: string): Promise<void> =>
    this.auth.currentUser
      ? this.auth.currentUser.updatePassword(password)
      : Promise.resolve()

  doSignOut = (): Promise<void> => this.auth.signOut()

  getImagesStorage = (): firebase.storage.Reference =>
    firebase.storage().ref('images')

  // user = (uid?: string): firebase.database.Reference =>
  //   this.db.ref(`users/${uid}`)

  firebase = (): firebase.app.App => this.app
}

export default Firebase
