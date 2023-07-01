'use client'

import React, { useState, useContext } from 'react'
import { signIn, signUp } from '../firebase/auth/auth'
// import { signOut } from 'firebase/auth'
// import { AuthContext } from '../context/AuthContext'
import Link from 'next/link'



const SignIn = () => {
	// const { handleSignIn } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// const [logInEmail, setLogInEmail] = useState('')
	// const [logInPassword, setLogInPassword] = useState('')

	

	const handleForm = async (e) => {
		e.preventDefault()

		const { result, error } = await signIn(email, password)

		if (error) {
			return console.log(error)
		}
		console.log(result)
		signIn()
	}


	return (
		<div className=' text-center '>
		
			<form onSubmit={handleForm} className='flex flex-col'>
				<input
					type='text'
					placeholder='Email'
					value={email}
					id='email'
					className='border-2 border-stone-700 p-1 mb-2 rounded-lg'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					className='border-2 border-stone-700 p-1 rounded-lg'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					type='submit'
					className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
				>
					
					Log In
				</button>
			</form>
			<p className='text-white-primary-100'>
				Don't have an account? <Link href='/signup'>Sign up!</Link>
			</p>
		</div>
	)
}

export default SignIn
