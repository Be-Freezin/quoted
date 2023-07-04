'use client'
import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Nav from './components/Nav'
import Feed from './components/Feed'
import Header from './components/Header'
import SignIn from './components/SignIn'
import Link from 'next/link'


export default function Home() {
	

	// Array of objects for our posts
	const [post, setPost] = useState([
		{
			title: 'Metal heads have more fun',
			post: 'I like brutal death metal and programming',
			author: 'Brayden Friesen',
			date: '2023',
		},
	])

	return (
		<main className='min-h-screen bg-white-primary-100'>
			<Nav
				signIn={<SignIn />}
				
			/>
			<Header />
			<Feed post={post} />
			{/* <div className='z-10 w-full max-w-5xl items-center justify-between font-serif text-sm lg:flex px-24'></div> */}
		</main>
	)
}
