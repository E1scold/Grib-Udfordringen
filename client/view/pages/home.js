FlowRouter.route('/home', {
	name:'home',
	action() {
		BlazeLayout.render('default', {page:'home'})
	}
})

FlowRouter.route('/', {
	name:'root',
	action() {
		FlowRouter.go('home')
	}
})

Template.home.onCreated(function() {
	Meteor.subscribe('events')
})

Template.home.events({
	'click #go-insert-event'(event) {
		event.preventDefault()
		FlowRouter.go('insertEvent')
	}
})

Template.home.helpers({
	events(){
		return Events.find()	
	}
})