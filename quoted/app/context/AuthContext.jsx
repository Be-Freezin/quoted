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
	getDoc,
	setDoc,
	doc,
	addDoc,
	query,
	onSnapshot,
	snapshot,
	deleteDoc,
} from 'firebase/firestore'
import defaultPhoto from '../../public/defaultphoto.webp'

import { auth, db, storage, upload } from '../firebase/config'

import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
	const currentUser = auth.currentUser
	
	const [user, setUser] = useState(null)
	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		photoURL: '',
		uid: '',
	})
	const [displayName, setDisplayName] = useState('')
	
	const [photoURL, setPhotoURL] = useState('')
	
	const [photoFile, setPhotoFile] = useState(null)

	const [users, setUsers] = useState([])
	const [posts, setPosts] = useState([])
	const [newPost, setNewPost] = useState({
		title: '',
		body: '',
		author: '',
		authorUid: '',
		date: '',
		authorPhotoURL: '',
	})



	const handleUpdateProfile = async () => {
		if (displayName.length === 0) {
			console.log('Display name cannot be empty')
			return
		}

		try {
			await updateProfile(auth.currentUser, {
				displayName: displayName,
			})

			console.log('Profile updated successfully')
		} catch (error) {
			console.error('Error updating profile:', error)
		}
	}

	const handlePhotoUpload = (e) => {
		if (photoFile == null) {
			const defaultPhotoURL = { defaultPhoto }
			updateProfile(auth.currentUser, {
				photoURL: defaultPhotoURL,
			})
				.then(() => {
					setPhotoURL(defaultPhotoURL)
					alert('Default image set')
				})
				.catch((error) => {
					console.error('Error setting default image:', error)
				})
		} else {
		}
		const imageRef = ref(storage, `profile_photos/${auth.currentUser.uid}`)
		uploadBytes(imageRef, photoFile)
			.then(() => getDownloadURL(imageRef))
			.then((downloadURL) => {
				updateProfile(auth.currentUser, {
					photoURL: downloadURL,
				})
			})
			.then(() => {
				alert('image uploaded')
			})

		console.log(photoURL)
	}
	const handleFileChange = (e) => {
		setPhotoFile(e.target.files[0])
	}

	

	useEffect(() => {
		if (auth.currentUser?.photoURL) {
			setPhotoURL(auth.currentUser.photoURL)
		}
	}, [])

	// Add new post function
	// ! THE AUTHOR PHOTO ISNT BEING SET PROPERLY HERE
	const addPost = async (e) => {
		e.preventDefault()
		if (newPost.title !== '' && newPost.body !== '') {
			const { displayName, uid, photoURL } = user
			console.log('User:', displayName, uid, photoURL)

			await addDoc(collection(db, 'articles'), {
				title: newPost.title,
				body: newPost.body,
				author: newPost.author,
				date: newPost.date,
				authorUid: user.uid,
				authorPhotoURL: user.photoURL,
			})
			setNewPost({
				title: '',
				body: '',
				author: '',
				date: '',
				authorUid: '',
				authorPhotoURL: '',
			})
		}
	}
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	useEffect(() => {
		if (auth.currentUser?.photoURL) {
			setPhotoURL(auth.currentUser.photoURL)
		}
	}, [])
	// Display Posts from db

	useEffect(() => {
		const postData = query(collection(db, 'articles'))
		const unsubscribe = onSnapshot(postData, (QuerySnapshot) => {
			let postsArr = []

			QuerySnapshot.forEach((doc) => {
				const post = doc.data()
				const { name, uid, authorPhotoURL } = post
// 
				const updatedPost = {
					...post,
					id: doc.id,
					authorName: name,
					authorUid: uid,
					authorPhotoURL: authorPhotoURL,
				}
				console.log('Updated Post:', updatedPost)
				
// 
				postsArr.push({
					...post,
					id: doc.id,
					authorName: name,
					authorUid: uid,
					authorPhotoURL: authorPhotoURL,
				})
			})
			postsArr.sort((a, b) => new Date(b.date) - new Date(a.date))
			setPosts(postsArr)

			return () => unsubscribe()
		})
	}, [])

	// const deleteItem = async (id) => [await deleteDoc(doc(db, 'articles', id))]

	const deleteItem = async (postId) => {
		try {
			const postDocRef = doc(db, 'articles', postId)
			const postDoc = await getDoc(postDocRef)

			if (postDoc.exists()) {
				const post = postDoc.data()
				if (post.author === auth.currentUser.displayName) {
					await deleteDoc(postDocRef)
					console.log('Blog post deleted successfully')
				} else {
					console.log('You do not have permission to delete this blog post')
				}
			} else {
				console.log('Blog post does not exist')
			}
		} catch (error) {
			console.error('Error deleting blog post:', error)
		}
	}

	// Create user function


const createUser = async (email, password, displayName) => {
	try {
		// Create a new user with email and password
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		)
		const user = userCredential.user

		// Update the user's display name
		await updateProfile(user, { displayName })

		const userData = {
			name: displayName,
			email: email,
			photoURL: user.photoURL,
			uid: user.uid,
		}

		// Store user information in Firestore
		const userRef = doc(db, 'users', user.uid)
		await setDoc(userRef, userData)

		// Rest of the code...
	} catch (error) {
		console.log(error)
	}
}


	// const createUser = async (email, password, displayName) => {
	// 	return createUserWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			const user = userCredential.user
	// 			const userData = {
	// 				name: displayName,
	// 				email: email,
	// 				photoURL: photoURL,
	// 				uid: user.uid, 
	// 			}

	// 			// Store user information in Firestore
	// 			const userRef = doc(db, 'users', user.uid)
	// 			return setDoc(userRef, userData)
	// 		})
	// 		.catch((error) => {
	// 			console.log(error)
	// 		})
	// }



	// Sign in function

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	// Logout function

	// const logout = async () => {
	// 	try {
	// 		const defaultPhotoURL = { defaultPhoto }
	// 		// Remove the user's profile photo URL
	// 		await updateProfile(auth.currentUser, {
	// 			photoURL: defaultPhotoURL,
	// 		})

	// 		setPhotoURL(defaultPhotoURL)

	// 		return signOut(auth)
	// 		console.log('Logged out')
	// 	} catch (error) {
	// 		console.log(error.message)
	// 	}
	// }

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
				displayName,
				photoURL,
				photoFile,
				setPhotoFile,
				setPhotoURL,
				handlePhotoUpload,
				upload,
				handleFileChange,
				defaultPhoto,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(UserContext)
}
