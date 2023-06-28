import React from 'react'

const Nav = () => {
  return (
		<div className='bg-stone-600 w-full flex items-center justify-between'>
			<a className='m-4 lg:mx-16'>QUOTED</a>
			{/* Make a tag a link so it directs back to home or top of page */}
			<button className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-amber-400 bg-stone-400 hover:bg-stone-300'>
				Log in/Sign up
			</button>
		</div>
	)
}
//! Button will guide user to sign up and enable them to make posts

export default Nav