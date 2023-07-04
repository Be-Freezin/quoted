import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { HiXMark } from 'react-icons/hi2'
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
			className='p-4 w-11/12 lg:w-1/3 text-black-primary-100 border-b-2 mb-5 border-black-primary-100 bg-white-primary-80 rounded odd:bg-white-primary-60'
		>
			<span className='text-xl font-bold'>{post.title}</span>
			<p className='my-4'>{post.body}</p>
			<div className='flex w-full md:w-5/6  justify-between items-center text-sm font-light'>
				<div className='flex flex-row items-center w-32 justify-between text-center'>
					<Image
						src={post.authorPhotoURL || defaultPhoto}
						alt='Picture of the author'
						width={50}
						height={50}
						className='rounded-full'
					/>
					<span className='w-fit'>{post.author}</span>
				</div>

				{new Date(post.date).toLocaleString('en-US', {
					day: 'numeric',
					month: 'short',
					hour: 'numeric',
					minute: 'numeric',
				})}
				<button
					onClick={() => deleteItem(post.id)}
					className='bg-red-primary-100 p-1 border-2 border-black-primary-100 rounded '
				>
					<HiXMark className='text-xl' />
				</button>
			</div>
		</article>
	)
}

export default PostCard
