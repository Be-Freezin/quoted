import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthModal = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [profilePicture, setProfilePicture] = useState(null)

	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			await signInWithEmailAndPassword(auth, email, password)
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
				<button type='submit'>Submit</button>
			</form>
			<p>or login</p>
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
		</div>
	)
}

export default AuthModal
