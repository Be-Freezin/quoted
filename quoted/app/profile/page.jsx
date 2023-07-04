'use client'
import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useAuth, upload } from '../firebase/config'
import { getAuth, updateProfile } from 'firebase/auth'
import Nav from '../components/Nav'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

const Profile = () => {
	const {
		user,
		logout,
		currentUser,
		displayName,
		setDisplayName,
		handleUpdateProfile,
		photoURL,
		setPhotoURL,
		handlePhotoUpload,
		upload,
		handleFileChange,
		defaultPhoto
	} = UserAuth()
	const router = useRouter()

	// const handleLogout = async () => {
	// 	try {
	// 		await logout()
	// 		router.push('/')
	// 		console.log('logged out')
	// 	} catch (e) {
	// 		console.log(e.message)
	// 	}
	// }

	return (
		<div className=' flex flex-col w-full min-h-screen justify-center items-center bg-yellow-primary-100'>
			<Nav />

			<div className='flex flex-col justify-evenly items-center my-auto h-96 '>
				
				<Image
					src={user.photoURL || defaultPhoto}
					alt='Picture of the author'
					width={300}
					height={300}
					className='rounded-full'
				/>

				<p className='font-bold text-5xl text-center '>
					Welcome, {user.displayName}
				</p>
				<p>Here you can update your basic profile information.</p>
				<form onSubmit={handleUpdateProfile}>
					<div className='flex flex-col justify-evenly h-full'>
						<label
							htmlFor='text'
							className='flex flex-col items-center justify-between  '
						>
							<span className='font-bold mb-2'>Update username</span>
							<input
								type='text'
								value={displayName}
								placeholder='Username'
								className='border-2 border-stone-700 p-1 rounded-lg'
								onChange={(e) => setDisplayName(e.target.value)}
							/>
						</label>
						<button
							type='submit'
							// disabled={displayName.length === 0}
							className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
						>
							Update Username
						</button>
					</div>
				</form>
				<div className='flex flex-col justify-evenly h-full text-center'>
					<label
						htmlFor='avatar'
						className='flex flex-col items-center justify-between  '
					>
						<span className='font-bold mb-2'>Choose a profile picture:</span>
						<input type='file' onChange={handleFileChange} className='text-center' />
					</label>
					<button
						onClick={handlePhotoUpload}
						className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
					>
						Upload
					</button>
				</div>

				{/* <button
					onClick={handleLogout}
					className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
				>
					Logout
				</button> */}
			</div>
		</div>
	)
}

export default Profile
