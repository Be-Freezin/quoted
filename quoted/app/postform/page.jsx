'use client'
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import { UserAuth } from '../context/AuthContext'

// import addData from '../firebase/firestore/addData'

const page = () => {
  // const [author, setAuthor] = useState('')
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
  // const [date, setDate] = useState('')

  const { addPost, setNewPost, newPost } = UserAuth()

  const router = useRouter()
  return (
		<div>
			<form onSubmit={addPost}>
				<div className='flex flex-col justify-center items-center w-5/6 mx-auto'>
					<label htmlFor='author'>
						{' '}
						<input
							type='text'
							placeholder='Author'
							value={newPost.author}
							className='border-2 border-stone-700 p-1 mb-2 rounded-lg w-full'
							onChange={(e) =>
								setNewPost({ ...newPost, author: e.target.value })
							}
						/>
					</label>
					<label htmlFor='title'>
						{' '}
						<input
							type='text'
							placeholder='title'
							value={newPost.title}
							onChange={(e) =>
								setNewPost({ ...newPost, title: e.target.value })
							}
							className='border-2 border-stone-700 p-1 mb-2 rounded-lg'
						/>
					</label>
					<label htmlFor='body'>
						<textarea
							type='textarea'
							rows='5'
							cols='40'
							placeholder='body'
							value={newPost.body}
							onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
							className='border-2 border-stone-700 p-1 mb-2 rounded-lg'
						/>
					</label>
					<label htmlFor='date'>
						{' '}
						<input
							type='date'
							placeholder='date'
							value={newPost.date}
							onChange={(e) =>
								setNewPost({ ...newPost, date: e.target.value })
							}
							className='border-2 border-stone-700 p-1 mb-2 rounded-lg'
						/>
					</label>
					<button type='submit' className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

export default page