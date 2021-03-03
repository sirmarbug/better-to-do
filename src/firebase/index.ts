import firebase from 'firebase'

const firebaseConfig = {
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebaseApp.auth()
export const db = firebaseApp.firestore()
