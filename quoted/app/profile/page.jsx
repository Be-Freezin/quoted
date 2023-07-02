'use client'
import React, {useState} from 'react'
import { UserAuth } from '../context/AuthContext'
import { getAuth, updateProfile } from 'firebase/auth'

import { useRouter } from 'next/navigation'
const auth = getAuth()
const Profile = () => {

const { user, logout, currentUser, displayName, setDisplayName, handleUpdateProfile } = UserAuth()
const router = useRouter()


const handleLogout = async () => {
	try{
		await logout()
		 router.push('/')
		 console.log('logged out')
	} catch(e){
		console.log(e.message)
	}
}

	
	return (
		<div className='p-4 flex flex-col w-5/6'>
			<h1 className='text-2xl font-bold'>Profile</h1>

			<p>Welcome, {user.displayName}</p>
			<form onSubmit={handleUpdateProfile}>
				<input
					type='text'
					value={displayName}
					placeholder='Username'
					className='border-2 border-stone-700 p-1 rounded-lg'
					onChange={(e) => setDisplayName(e.target.value)}
				/>
				<button
					type='submit'
					// disabled={displayName.length === 0}
					className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
				>
					Update Profile
				</button>
			</form>
			<button
				onClick={handleLogout}
				className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
			>
				Logout
			</button>
		</div>
	)
}

export default Profile
