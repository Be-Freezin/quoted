'use client'

import React, { useState } from 'react'
import signIn from '../firebase/auth/signin'
import { signOut } from 'firebase/auth'
// import { auth } from '../firebase/config'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// const [logInEmail, setLogInEmail] = useState('')
	// const [logInPassword, setLogInPassword] = useState('')

	// console.log(auth?.currentUser?.email)

	const handleForm = async (e) => {
		e.preventDefault()

		const { result, error } = await signUp(email, password)

		if (error) {
			return console.log(error)
		}
		console.log(result)
	}

	// const handleLogin = async (e) => {
	// 	e.preventDefault()
	// 	try {
	// 		await signInWithEmailAndPassword(auth, logInEmail, logInPassword)
	// 	} catch (err) {
	// 		console.error(err)
	// 	}
	// }

	// const logOut = async () => {
	// 	try {
	// 		await signOut(auth)
	// 	} catch (err) {
	// 		console.error(err)
	// 	}
	// }

	// const handleSignUp = async (e) => {
	// 	e.preventDefault()
	// 	try {
	// 		await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
	// 		// Additional logic for saving name and profile picture
	// 		// Redirect or handle successful sign-up
	// 	} catch (error) {
	// 		console.error(error)
	// 		// Handle sign-up error
	// 	}
	// }

	return (
		<div className=' text-center'>
			{/* <p>First time here? Sign up!</p>
			<form action='' className='flex flex-col'>
				<input
					type='text'
					placeholder='Name'
					className='border-2 border-stone-700'
				/>
				<input
					type='text'
					placeholder='email'
					value={signUpEmail}
					className='border-2 border-stone-700'
					onChange={(e) => setSignUpEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='password'
					value={signUpPassword}
					className='border-2 border-stone-700'
					onChange={(e) => setSignUpPassword(e.target.value)}
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
			</form> */}
			<form onSubmit={handleForm}>
				<input
					type='text'
					placeholder='email'
					value={email}
					id='email'
					className='border-2 border-stone-700'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='password'
					value={password}
					className='border-2 border-stone-700'
					onChange={(e) => setLogInPassword(e.target.value)}
				/>
				<button
					type='submit'
					
					className='bg-stone-400 w-fit px-2 py-2 rounded-xl'
				>
					{' '}
					Log In
				</button>
			</form>
		</div>
	)
}

export default SignIn
