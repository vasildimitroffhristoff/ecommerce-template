import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCERM-bU3RMzxxkwdUwYJcSjnBuS6P-usc',
  authDomain: 'ecommerce-template-8897d.firebaseapp.com',
  databaseURL:
    'https://ecommerce-template-8897d.firebaseio.com',
  projectId: 'ecommerce-template-8897d',
  storageBucket: 'ecommerce-template-8897d.appspot.com',
  messagingSenderId: '894393938087',
  appId: '1:894393938087:web:06cdd5321b22d778082b82',
  measurementId: 'G-FVZH4FEK0Y'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ propmpt: 'select_account' })
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider)

export default firebase
