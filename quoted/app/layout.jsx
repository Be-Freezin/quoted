'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './profile/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthContextProvider>
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
					{children}
				</AuthContextProvider>
			</body>
		</html>
	)
}
