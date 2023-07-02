import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
// import { db } from '../firebase/config'
// import { doc, getDoc } from 'firebase/firestore'

const PostCard = ({ post, id }) => {
	const [authorData, setAuthorData] = useState(null)
	const { user, users, posts } = UserAuth()

	// useEffect(() => {
	// 	const getAuthorData = async (data) => {
	// 		setAuthorData(
  //       await getDoc(doc(db, 'users', post.data.author)).data()
  //       )
	// 	}

	// 	getAuthorData()
	// }, [post])
	return (
		<article
			key={id}
			className='p-4 w-11/12 lg:w-1/3 text-black-primary-100 border-b-2 border-black-primary-100'
		>
			<span className='text-xl'>{post.title}</span>
			<p className='my-4'>{post.body}</p>
			<div className='flex w-1/4 justify-between text-sm font-light'>
				<span>{post.author}</span>
				{new Date(post.postDate).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
				})}
				{/* <span> {post.data.postDate} </span> */}
			</div>
		</article>
	)
}

export default PostCard
