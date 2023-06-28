import Image from 'next/image'
import Nav from './components/Nav'
import Feed from './components/Feed'

export default function Home() {
  return (
		<main className='min-h-screen'>
			<Nav />
			<Feed />
			{/* <div className='z-10 w-full max-w-5xl items-center justify-between font-serif text-sm lg:flex px-24'></div> */}
		</main>
	)
}
