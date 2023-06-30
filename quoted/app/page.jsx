'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Nav from './components/Nav'
import Feed from './components/Feed'
import Header from './components/Header'
import AuthModal from './components/AuthModal'
import Link from 'next/link'
export default function Home() {
	const [toggleLogin, setToggleLogin] = useState(false)

	// Array of objects for our posts
	const [post, setPost] = useState([
		{
			title: 'Metal heads have more fun',
			post: 'I like brutal death metal and programming',
			author: 'Brayden Friesen',
			date: '2023',
		},
	])
	// state for our inputs to catch the new post and we will push it into our array of posts
	const [newPost, setNewPost] = useState({
		title: '',
		post: '',
		author: '',
		date: '',
	})
	return (
		<main className='min-h-screen bg-stone-600'>
			<Nav
				authModal={<AuthModal />}
				toggleLogin={toggleLogin}
				setToggleLogin={setToggleLogin}
			/>
			<Header />
			<Feed post={post} />
			{/* <div className='z-10 w-full max-w-5xl items-center justify-between font-serif text-sm lg:flex px-24'></div> */}
		</main>
	)
}
