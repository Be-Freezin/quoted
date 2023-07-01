import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const PostCard = ({ post, id }) => {
	const [authorData, setAuthorData] = useState(null)

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
			<span className='text-xl'>{post.data.title}</span>
			<p className='my-4'>{post.data.body}</p>
			<div className='flex w-1/4 justify-between text-sm font-light'>
				<span>{post.data.author}</span>
				{new Date(post.data.postDate).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
				})}
				{/* <span> {post.data.postDate} </span> */}
			</div>
		</article>
	)
}

export default PostCard
