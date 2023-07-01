import firebase_app from '../config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../firebase/config'

const auth = getAuth(firebase_app)
const signIn = async (email, password) => {
	let result = null,
		error = null
	try {
		result = await signInWithEmailAndPassword(auth, email, password)
	} catch (err) {
		error = err
		console.error(err)
	}
	return { result, error }
}
export default signIn
