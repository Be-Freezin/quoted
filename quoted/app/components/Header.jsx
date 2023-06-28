import React from 'react'

const Header = () => {
  return (
		<header>
			<div className='bg-stone-700 flex flex-col w-full justify-center items-center h-96 text-stone-50'>
				<div className='text-center'>
					<h1 className='text-6xl p-4 '>Quoted</h1>
					<h3 className='font-thin '>
						Become the word wizard you've always dreamed of.
					</h3>
				</div>
			</div>
		</header>
	)
}

export default Header