import React, { useContext, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import PostCard from './PostCard'

const Feed = ({ post }) => {
	const [togglePost, setTogglePost] = useState(false)
	const { user, users, posts } = UserAuth()
	const router = useRouter()

	// const { users, posts } = UserAuth

	// const handleCreatePost = {
	// 	user === null? (<div></div>): ('')
	// }

	// const { posts } = useContext(AuthContext)
	// console.log(posts)

	const handleCreatePost = () => {
		if (!user){
			console.log('you must be logged in')
			return (
				<div><p>You must be logged in to create a post</p></div>
			)
			
		} return router.push('/postform')
	}

	return (
		<section className='flex flex-col justify-center items-center'>
			<button onClick={handleCreatePost} className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'>
				Create Post
			</button>
			{/* Button will pop up a window that contains a form for the user to create the post. */}
			{posts.map(post => (
				<PostCard post={post} key={post.id} />
			))}
		
		</section>
		// Just dummy text for now, but this is where the db posts will be displayed
	)
}

export default Feed
