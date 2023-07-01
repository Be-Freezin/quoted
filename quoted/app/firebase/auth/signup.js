import firebase_app from '../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

const signUp = async (email, password) => {
	e.preventDefault()
	try {
		await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
	} catch (error) {
		console.error(error)
	}

	return { result, error }
}

export default signUp
