//Global methods here

throwServerError = error => {
	if(error && Meteor.isServer)
		throw error
}