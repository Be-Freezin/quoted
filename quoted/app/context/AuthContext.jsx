import React, { useState, useContext, useEffect, createContext } from 'react'
// import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { collection, getDocs, setDocs, doc } from 'firebase/firestore'
// import { signInWithEmailAndPassword } from 'firebase/auth'

import { db, auth } from '../firebase/config'

const AuthContext = createContext({})

// export const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
	const [users, setUsers] = useState([])
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const getUsers = async () => {
			const querySnapshot = await getDocs(collection(db, 'users'))

			setUsers(
				querySnapshot.docs.map((doc) => {
					return {
						id: doc.id,
						data: {
							...doc.data(),
						},
					}
				})
			)
		}
		getUsers()
	}, [])

	useEffect(() => {
		const getPosts = async () => {
			const querySnapshot = await getDocs(collection(db, 'articles'))

			setPosts(
				querySnapshot.docs.map((doc) => {
					return {
						id: doc.id,
						data: {
							body: doc.data().body,
							title: doc.data().title,
							author: doc.data().author,
							postDate: doc.data().postDate,
						},
					}
				})
			)
		}

		getPosts()
	}, [])

	// const handleSignIn = async (email, password) => {
	// 	await signInWithEmailAndPassword(auth, email, password)
	// }
	return (
		<AuthContext.Provider value={{ posts, users }}>
			{children}
		</AuthContext.Provider>
	)
}
export { AuthContext, AuthContextProvider }
