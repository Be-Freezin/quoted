import { createContext, useContext, useEffect, useState } from 'react'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth'
import {
	collection,
	getDocs,
	setDocs,
	doc,
	addDoc,
	query,
	onSnapshot,
	deleteDoc,
} from 'firebase/firestore'
import { auth, db } from '../firebase/config'
const UserContext = createContext()
const currentUser = auth.currentUser

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		imgUrl: '',
	})
	const [displayName, setDisplayName] = useState('')

	const [users, setUsers] = useState([])
	const [posts, setPosts] = useState([])
	const [newPost, setNewPost] = useState({
		title: '',
		body: '',
		author: '',
		date: '',
	})

	const handleUpdateProfile = async () => {

		 if (displayName.length === 0) {
				console.log('Display name cannot be empty')
				return
			}

		try {
			await updateProfile(auth.currentUser, {
				displayName: displayName,
				photoURL: 'https://example.com/jane-q-user/profile.jpg',
			})
			console.log('Profile updated successfully')
		} catch (error) {
			console.error('Error updating profile:', error)
		}
		
	}

	// useEffect(() => {
	// 	const getUsers = async () => {
	// 		const querySnapshot = await getDocs(collection(db, 'users'))

	// 		setUsers(
	// 			querySnapshot.docs.map((doc) => {
	// 				return {
	// 					id: doc.id,
	// 					data: {
	// 						...doc.data(),
	// 					},
	// 				}
	// 			})
	// 		)
	// 	}
	// 	getUsers()
	// }, [])

	// Add new post function

	const addPost = async (e) => {
		e.preventDefault()
		if (newPost.title !== '' && newPost.body !== '') {
			await addDoc(collection(db, 'articles'), {
				title: newPost.title,
				body: newPost.body,
				author: newPost.author,
				date: newPost.date,
			})
			setNewPost({ title: '', body: '', author: '', date: '' })
		}
	}

	// Display Posts from db

	useEffect(() => {
		const postData = query(collection(db, 'articles'))
		const unsubscribe = onSnapshot(postData, (QuerySnapshot) => {
			let postsArr = []

			QuerySnapshot.forEach((doc) => {
				postsArr.push({ ...doc.data(), id: doc.id })
			})
			setPosts(postsArr)

			return () => unsubscribe()
		})
	}, [])

	const deleteItem = async (id) => [await deleteDoc(doc(db, 'articles', id))]

	// Create user function

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	// const createUser = async (e,email, password) => {
	// 	e.preventDefault()
	// 	if(newUser.name !== '' && newUser.email!==''){

	// 		await addDoc(collection(db, 'users'),{
	// 			name:newUser.name,
	// 			email:newUser.email,
	// 			imgUrl:newUser.imgUrl,
	// 		})
	// 		setNewUser({name: '', email: '', imgUrl:''})
	// 	}
	// 	createUserWithEmailAndPassword(auth, email, password)
	// }

	// Sign in function

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	// Logout function

	const logout = () => {
		return signOut(auth)
	}

	// Watch for authentication function

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser)
			setUser(currentUser)
		})
		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<UserContext.Provider
			value={{
				createUser,
				newUser,
				setNewUser,
				user,
				currentUser,
				logout,
				signIn,
				posts,
				users,
				addPost,
				setNewPost,
				newPost,
				deleteItem,
				handleUpdateProfile,
				setDisplayName,
				displayName
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(UserContext)
}
