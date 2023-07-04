import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import Image from 'next/image'


const PostCard = ({ post, id, authorPhoto }) => {
	// const [authorData, setAuthorData] = useState(null)

	// const [authorPhotoURL, setAuthorPhotoURL] = useState('')
	const { user, users, posts,newPost, deleteItem, defaultPhoto, authorUid } = UserAuth()

	// ! WORK ON RENDERING THE PHOTO ON THE POST
	// useEffect(() => {
	// 	console.log(post.authorUid)

	// 	const fetchAuthorData = async () => {
	// 		if (!post || !post.authorUid) {
	// 			return
	// 		}

	// 		const authorDocRef = doc(db, 'users', post.authorUid)
	// 		const authorDocSnapshot = await getDoc(authorDocRef)
	// 		if (authorDocSnapshot.exists()) {
	// 			const authorData = authorDocSnapshot.data()
	// 			if (authorData?.authorPhotoURL) {
	// 				setAuthorPhotoURL(authorData.authorPhotoURL)
	// 			}
	// 		}
	// 	}

	// 	fetchAuthorData()
	// }, [post])
	// !
	// if (!post.authorPhotoURL) {
	// 	// Return null or a loading state while the authorPhotoURL is being fetched
	// 	return null
	// }
	console.log(newPost.authorPhotoURL)
	return (
		<article
			key={post.id}
			className='p-4 w-11/12 lg:w-1/3 text-black-primary-100 border-b-2 mb-5 border-black-primary-100'
		>
			<span className='text-xl'>{post.title}</span>
			<p className='my-4'>{post.body}</p>
			<div className='flex w-2/3 md:w-2/6  justify-between items-center text-sm font-light'>
				<Image
					src={post.authorPhotoURL || defaultPhoto}
					alt='Picture of the author'
					width={50}
					height={50}
					className='rounded-full'
				/>
				<span>{post.author}</span>

				{new Date(post.date).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: 'numeric',
					minute: 'numeric',
				})}
				<button
					onClick={() => deleteItem(post.id)}
					className='bg-red-primary-100 px-2 rounded-sm font-bold '
				>
					X
				</button>
			</div>
		</article>
	)
}

export default PostCard
