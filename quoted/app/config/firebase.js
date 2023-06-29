// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC-dJmdYaWJIytT_RcpUHReI8y2s9eMWZw',
	authDomain: 'quoted-fc4dc.firebaseapp.com',
	projectId: 'quoted-fc4dc',
	storageBucket: 'quoted-fc4dc.appspot.com',
	messagingSenderId: '280129434370',
	appId: '1:280129434370:web:1dbaaaf616205e024c481b',
	measurementId: 'G-CE6NFR1V6D',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
