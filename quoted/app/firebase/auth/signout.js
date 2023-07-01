import firebase_app from '../config'
import { signOut, getAuth } from 'firebase/auth'

const auth = getAuth(firebase_app)

const logOut = async () => {
	try {
		await signOut(auth)
	} catch (err) {
		console.error(err)
	}
}
export default logOut
