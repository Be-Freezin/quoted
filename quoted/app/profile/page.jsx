'use client'
import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

const Profile = () => {

const { user, logout} = UserAuth()
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
		<div className='p-4'>
			<h1 className='text-2xl font-bold'>Profile</h1>
			<p>Welcome, {user&& user.email}</p>
			<button onClick={handleLogout} className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'>
				Logout
			</button>
		</div>
	)
}

export default Profile
