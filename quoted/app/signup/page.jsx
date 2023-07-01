'use client'
import React, { useState } from 'react'
import signUp from '../firebase/auth/signup'
import { useRouter } from 'next/navigation'

const page = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	const handleForm = async (e) => {
		e.preventDefault()
		const { result, err } = await signUp(email, password)
		if (err) {
			return console.log(err)
		}
		console.log(result)
		return router.push('/')
	}
	return (
		<div className='flex flex-col min-h-screen justify-center p-16 items-center text-center mx-0 my-0 bg-black-primary-80 '>
			<form onSubmit={handleForm} className='flex flex-col'>
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
					onChange={(e) => email(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					className='border-2 border-stone-700 p-1 rounded-lg'
					onChange={(e) => password(e.target.value)}
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
