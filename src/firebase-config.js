// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCx57OsDk7rGIz0twW1AIidsMH0PKi7IxU',
	authDomain: 'blogproject-9a400.firebaseapp.com',
	projectId: 'blogproject-9a400',
	storageBucket: 'blogproject-9a400.appspot.com',
	messagingSenderId: '1088112751639',
	appId: '1:1088112751639:web:23558c33b1306fd3221852',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
