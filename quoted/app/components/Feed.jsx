import React from 'react'

const Feed = ({post}) => {
	return (
		<section className='flex flex-col justify-center items-center'>
			<button className='px-4 py-2 m-4 lg:mx-16 rounded-lg border-2 border-black-primary-100 bg-blue-primary-100 hover:bg-blue-primary-70'>
				Create Post
			</button>
			{/* Button will pop up a window that contains a form for the user to create the post. */}
			{post.map((item, id) => (
				<article key={id} className='p-4 w-11/12 lg:w-1/3 text-black-primary-100 border-b-2 border-black-primary-100'>
					<span className='text-xl'>{item.title}</span>
					<p className='my-4'>{item.post}</p>
					<div className='flex w-1/4 justify-between text-sm font-light'>
						<span>{item.author}</span>
						<span> {item.date} </span>
					</div>
				</article>
			))}
			{/* <article className='p-4 w-11/12 lg:w-1/3 text-stone-50 border-b-2'>
				<span className='text-xl'>Post title</span>
				<p className='my-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, modi
					ullam beatae nulla asperiores quo odit adipisci laboriosam at,
					corporis voluptas eligendi totam officiis recusandae quia, iure
					corrupti voluptate error?
				</p>
				<div className='flex w-1/4 justify-between text-sm font-light'>
					<span>author</span>
					<span> date </span>
				</div>
			</article> */}
		</section>
		// Just dummy text for now, but this is where the db posts will be displayed
	)
}

export default Feed
