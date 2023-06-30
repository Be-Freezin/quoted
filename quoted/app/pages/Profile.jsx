import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebaseConfig'

const Profile = () => {
	const [user, loading, error] = useAuthState(auth)
	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	if (!user) {
		return <div>You are not logged in.</div>
	}
	return (
		<div>
			<h1>Profile</h1>
			<p>Welcome, {user.email}!</p>
		</div>
	)
}

export default Profile
