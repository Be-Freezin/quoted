import Image from 'next/image'
import Nav from './components/Nav'
import Feed from './components/Feed'
import Header from './components/Header'

export default function Home() {
  return (
		<main className='min-h-screen bg-stone-600'>
			<Nav />
			<Header />
			<Feed />
			{/* <div className='z-10 w-full max-w-5xl items-center justify-between font-serif text-sm lg:flex px-24'></div> */}
		</main>
	)
}
