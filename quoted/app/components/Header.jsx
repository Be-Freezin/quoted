import React from 'react'

const Header = () => {
  return (
		<header>
			<div className='bg-yellow-primary-100 flex flex-col w-full justify-center items-center h-96 text-black-primary-100'>
				<div className='text-center'>
					<h1 className='text-6xl p-4 '>Quoted</h1>
					<h3 className='font-medium '>
						Become the word wizard you've always dreamed of.
					</h3>
				</div>
			</div>
		</header>
	)
}

export default Header