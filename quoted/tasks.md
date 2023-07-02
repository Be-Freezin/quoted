# Project Setup
## Init Project
* Set up a new Next.js project.
* Configure Firebase for authentication, database (Firestore), and storage.

## User Authentication:
* Implement user registration functionality, allowing users to create accounts.
* Enable user login functionality to authenticate users.
* Implement password reset functionality (optional).

## User Profile Management:
* Create user profile pages where users can edit their basic information.
* Implement the ability for users to upload and update their profile pictures.

## Quote Creation and Management:
* Design a form for users to submit quotes, including fields for the quote text, author name, and optional profile picture upload.
* Store each quote entry in the Firestore database, including the timestamp.

## Homepage and Quote Listing:
* Create a homepage that displays all quotes in descending order of their timestamp.
* Fetch and render the quotes from the Firestore database.
* Display the author's name, profile picture (or a placeholder), and the creation timestamp for each quote.

## Authentication Restriction and Authorization:
* Implement authentication checks to ensure that only logged-in users can access the app's features.
* Add logic to allow only the author of a quote to edit or delete it.

## Testing and Refinement:
* Test the application thoroughly, covering various scenarios and edge cases.
* Gather feedback, identify and fix any bugs or usability issues.

## Deployment and Continuous Integration:
* Deploy the Next.js application to a hosting provider.
* Set up continuous integration and deployment (CI/CD) pipelines for seamless updates.

## REQUIRED FEATURES

* Users can create an account for themselves
* Users can edit their basic information
* Users can upload their profile picture
* Users can upload quotes to the app for everyone to see. Each entry should     contain the following entities:
* The quote
* Name of the author
* Profile pic of the author or a placeholder if no profile pic uploaded
* timestamp of when the quote was created
* A homepage where all the quotes ever written on the app are shown in descending order of their timestamp with the most recent one on top
* Users should be logged in to use the features of the app.
* Users can edit and delete the quotes only if they are the author of the same

## TASKS/TO-DO:
### What we've done

* Shelled out the basic ui
* styling is minimal, but is enough to get the point across for now(**THIS WILL CHANGE**)

### Whats next

* integrate firebase and work on the database
* create the form for submitting the post
* create the form for user log in













OLD COINTEXT FILE


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