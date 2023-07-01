
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword, signOut
} from 'firebase/auth'
import { db, auth } from '../config'


// SIGN UP FUNCTION
const signUp = async (email, password) => {
	let result = null,
		error = null
	try {
		result = await createUserWithEmailAndPassword(auth, email, password)
	} catch (e) {
		error = e
	}

	return { result, error }
}

// SIGN IN FUNCTION
const signIn = async (email, password) => {
	let result = null,
		error = null
	try {
		result = await signInWithEmailAndPassword(auth, email, password)
	} catch (e) {
		error = e
	}

	return { result, error }
}

const logOut = async () => {
	try {
		await signOut(auth)
	} catch (err) {
		console.error(err)
	}
}

export { signUp, signIn, logOut }
