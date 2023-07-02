import { createContext, useContext, useEffect, useState } from 'react'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import { collection, getDocs, setDocs, doc, addDoc, query, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../firebase/config'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({})

		const [users, setUsers] = useState([])
		const [posts, setPosts] = useState([])
			const [newPost, setNewPost] = useState({
				title: '',
				body: '',
				author: '',
				date: '',
			})

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

		const addPost = async (e) => {
			e.preventDefault()
			if(newPost.title !== '' && newPost.body !== '') {
				await addDoc(collection(db, 'articles'),{
					title: newPost.title,
					body: newPost.body,
					author: newPost.author,
					date: newPost.date
				})
				setNewPost({title: '', body:'',author: '', date: ''})
			}
		}

		useEffect(() => {
			const postData = query(collection(db, 'articles'))
			const unsubscribe = onSnapshot(postData,(QuerySnapshot) => {
				let postsArr=[]

				QuerySnapshot.forEach((doc) => {
					postsArr.push({...doc.data(), id: doc.id})
				})
				setPosts(postsArr)

				return () => unsubscribe()
			})
		},[])

		// useEffect(() => {
		// 	const getPosts = async (e) => {
		// 		e.preventDefault()
		// 		if (newPost.title !== "" && newPost.body !==""){
		// 			await addDoc
		// 		}
		// 		const querySnapshot = await getDocs(collection(db, 'articles'))

		// 		setPosts(
		// 			querySnapshot.docs.map((doc) => {
		// 				return {
		// 					id: doc.id,
		// 					data: {
		// 						body: doc.data().body,
		// 						title: doc.data().title,
		// 						author: doc.data().author,
		// 						postDate: doc.data().postDate,
		// 					},
		// 				}
		// 			})
		// 		)
		// 	}

		// 	getPosts()
		// }, [])

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}
	const logout = () => {
		return signOut(auth)
	}

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
		<UserContext.Provider value={{ createUser, user, logout, signIn, posts, users, addPost, setNewPost, newPost,  }}>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(UserContext)
}
