import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBmd7dmDlU28REjyTgbXIs6fnMGbYjyhdA",
    authDomain: "healtharch-82d54.firebaseapp.com",
    projectId: "healtharch-82d54",
    storageBucket: "healtharch-82d54.appspot.com",
    messagingSenderId: "253335056433",
    appId: "1:253335056433:web:dddb80fbc1dba2aeba6510"
  }

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }