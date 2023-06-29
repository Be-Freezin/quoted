import React from 'react'

const Login = () => {
  return (
		<div className=' text-center'>
      <p>First time here? Sign up!</p>
			<form action='' className='flex flex-col'>
				<input type='text' placeholder='Name' className='border-2 border-stone-700'  />
				<input type='text' placeholder='email' className='border-2 border-stone-700'  />
				<input type='password' placeholder='password' className='border-2 border-stone-700' />
			</form>
      <p>or login</p>
      <p>Add log in stuff here</p>
		</div>
	)
}

export default Login