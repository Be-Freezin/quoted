'use client'
import React, { useState } from 'react'
import signUp from '../firebase/auth/signup'
import { useRouter } from 'next/navigation'
import { UserAuth } from '../context/AuthContext'

const page = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()

	const { createUser } = UserAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		try {
			await createUser(email, password)
		} catch (e) {
			setError(e.message)
			console.log(e.message)
		}
		return router.push('/profile')
	}
	return (
		<div className='flex flex-col min-h-screen justify-center p-16 items-center text-center mx-0 my-0 bg-black-primary-80 '>
			<form onSubmit={handleSubmit} className='flex flex-col'>
				<input
					type='text'
					placeholder='Name'
					className='border-2 border-stone-700 p-1 rounded-lg'
				/>
				<input
					type='text'
					placeholder='Email'
					value={email}
					className='border-2 border-stone-700 p-1 rounded-lg'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					className='border-2 border-stone-700 p-1 rounded-lg'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className='w-full flex-col justify-between'>
					<button
						type='submit'
						// onClick={handleForm}
						className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
					>
						Sign up!
					</button>
				</div>
			</form>
		</div>
	)
}

export default page
