import firebase_app from '../config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../firebase/config'

const auth = getAuth(firebase_app)
const signIn = async (email, password) => {
	e.preventDefault()
	try {
		await signInWithEmailAndPassword(auth, email, password)
	} catch (err) {
		console.error(err)
	}
	return { result, error }
}
export default signIn
