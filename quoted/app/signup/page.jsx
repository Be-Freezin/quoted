'use client'
import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import { UserAuth } from '../context/AuthContext'

const page = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [displayName, setDisplayName] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()

	const { createUser, newUser, setNewUser } = UserAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		try {
			await createUser(email, password, displayName )
			
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
					value={displayName}
					// onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
					className='border-2 border-stone-700 p-1 rounded-lg'
					onChange={(e) => setDisplayName(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Email'
					value={email}
					// onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
					className='border-2 border-stone-700 p-1 rounded-lg'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					// onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
					className='border-2 border-stone-700 p-1 rounded-lg'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className='w-full flex-col justify-between'>
					<button
						type='submit'
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
