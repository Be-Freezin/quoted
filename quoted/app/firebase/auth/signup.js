import firebase_app from '../config'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'


const auth = getAuth(firebase_app)

const signUp = async (email, password) => {
	let result = null,
		error = null
	try {
		await createUserWithEmailAndPassword(auth, email, password)
	} catch (error) {
		console.error(error)
	}

	return { result, error }
}

export default signUp
