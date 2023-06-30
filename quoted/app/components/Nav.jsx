import React, { useState } from 'react'
// import AuthModal from './AuthModal'
import Link from 'next/link'

const Nav = ({ authModal, toggleLogin, setToggleLogin }) => {
	// const loginScreen = () => {
	// 	setLogIn((prev) => !prev)
	// }

	return (
		<div className='w-full flex items-center justify-between border-b-2 border-b-amber-200'>
			<a className='m-4 lg:mx-16 text-stone-50'>QUOTED</a>
			{/* Make a tag a link so it directs back to home or top of page */}
			<button 
				onClick={() => setToggleLogin(true)}
				className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-amber-200 bg-stone-400 hover:bg-stone-300'
			>
				Log in/Sign up
			</button>
			{toggleLogin && (
				<div className='fixed top-0   h-screen w-screen flex items-center justify-center border-b-2  bg-opacity-70 backdrop-filter backdrop-blur-sm  py-2 text-lg'>
					<div className='flex flex-col  justify-center p-16 items-center  mx-0 my-0 bg-stone-300'>
						<button
							onClick={() => setToggleLogin(false)}
							className='bg-stone-700 px-4 py-1 rounded-lg'
						>
							Close
						</button>
						{authModal}
					</div>
				</div>
			)}
		</div>
	)
}
//! Button will guide user to sign up and enable them to make posts

export default Nav
