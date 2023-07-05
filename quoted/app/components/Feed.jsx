import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'



import PostCard from './PostCard'


const Feed = () => {
	
	const { user, posts, newPost } = UserAuth()
	const router = useRouter()

	const handleCreatePost = () => {
		if (!user){
			console.log('you must be logged in')
			return (
				<div><p>You must be logged in to create a post</p></div>
			)
			
		} return router.push('/postform')
	}
console.log(posts.authorPhotoURL)
	return (
		<>
			<section className='flex flex-col justify-center items-center'>
				<button
					onClick={handleCreatePost}
					className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 font-bold border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70 transition-all duration-200 focus:outline-none  active:scale-95 shadow-md active:shadow-lg shadow-black-primary-70'
				>
					Create Post
				</button>

				{posts.map((post) => (
					<PostCard post={post} key={post.id}  />
				))}
		
			</section>
		</>
	)
}

export default Feed
