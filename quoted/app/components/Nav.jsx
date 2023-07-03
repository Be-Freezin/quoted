import React, { useContext, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'


import Link from 'next/link'

const Nav = ({ signIn, toggleLogin, setToggleLogin }) => {
	const { user, logout } = UserAuth()
	const router = useRouter()

	const handleLogout = async () => {
		try {
			await logout()
			router.push('/')
			console.log('logged out')
		} catch (e) {
			console.log(e.message)
		}
	}
	return (
		<div className='w-full flex items-center justify-between  border-b-2 border-black-primary-100'>
			<Link href="/" className='m-4 lg:mx-16 text-black-primary-100'>QUOTED</Link>
			{/* Make a tag a link so it directs back to home or top of page */}
			<div className='w-fit'>
				{/* <Link
					href='/'
					className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
				>
					Home
				</Link> */}
				{/* <Link
					href='/profile'
					className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
				>
					Profile
				</Link> */}
				<button
					onClick={() => setToggleLogin(true)}
					className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
				>
					Log in/Sign up
				</button>
				<button
					onClick={handleLogout}
					className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'
				>
					Log Out
				</button>
				{/* <img src={user.photoURL} alt="" srcSet="" /> */}
			</div>
			{toggleLogin && (
				<div className='fixed top-0   h-screen w-screen flex items-center justify-center border-b-2  bg-opacity-70 backdrop-filter backdrop-blur-sm  py-2 text-lg'>
					<div className='flex flex-col  justify-center p-16 items-center  mx-0 my-0 bg-black-primary-80 rounded-2xl'>
						<button
							onClick={() => setToggleLogin(false)}
							className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 font-black border-black-primary-100 bg-red-primary-100 hover:bg-red-primary-70'
						>
							X
						</button>
						{signIn}
					</div>
				</div>
			)}
		</div>
	)
}
//! Button will guide user to sign up and enable them to make posts

export default Nav
