# REQUIRED FEATURES

* Home page where all the quotes ever written on the app are shown
  
* Posts should be sorted by there post date, with the most recent on top.
  
* Users MUST be logged in to use functions of the site
  
* Users can edit and delete the quotes only if they are the author of them.
  
### USER FEATURES

* Users can create an account for themselves

* Users can edit there basic information

* Users can upload their profile picture

* Users can upload quotes to the app for everyone to see.

## POST FEATURES

* Each post should contain the following
  * The quote
  * Name of the author
  * Profile picture of the author or a placeholder image if they dont have one
  * Timestamp of when the quote was created






CURRENT CREATEUSER FUNCTION

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}