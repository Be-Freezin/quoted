'use client'

import React, { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthModal = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [profilePicture, setProfilePicture] = useState(null)

	console.log(auth?.currentUser?.email)

	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			await signInWithEmailAndPassword(auth, email, password)
		} catch (err) {
			console.error(err)
		}
	}

		const logOut = async () => {
			
			try {
				await signOut(auth)
			} catch (err) {
				console.error(err)
			}
		}

	const handleSignUp = async (e) => {
		e.preventDefault()
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			// Additional logic for saving name and profile picture
			// Redirect or handle successful sign-up
		} catch (error) {
			console.error(error)
			// Handle sign-up error
		}
	}
	

	return (
		<div className=' text-center'>
			<p>First time here? Sign up!</p>
			<form action='' className='flex flex-col'>
				<input
					type='text'
					placeholder='Name'
					className='border-2 border-stone-700'
				/>
				<input
					type='text'
					placeholder='email'
					value={email}
					className='border-2 border-stone-700'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='password'
					value={password}
					className='border-2 border-stone-700'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className='w-full flex-col justify-between'>
					<button
						type='submit'
						onClick={handleSignUp}
						className='bg-stone-400 w-fit px-2 py-2 rounded-xl'
					>
						Sign In
					</button>
					<button
						onClick={logOut}
						className='bg-stone-400 w-fit px-2 py-2 rounded-xl'
					>
						Sign Out
					</button>
				</div>
			</form>
		</div>
	)
}

export default AuthModal
