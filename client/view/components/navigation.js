Template.navigation.events({
	'click #go-home'(event) {
		event.preventDefault()
		FlowRouter.go('home')
	}
})