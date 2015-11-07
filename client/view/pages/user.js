FlowRouter.route('/user/:username', {
	name:'user',
	action() {
		BlazeLayout.render('default', {page:'user'})
	}
})

Template.user.onCreated(function() {
	let username = FlowRouter.getParam('username')

	//get user information from server
})