FlowRouter.route('/insertEvent', {
	name:'insertEvent',
	action() {
		BlazeLayout.render('default', {page:'insertEvent'})
	}
})

Template.insertEvent.events({
	'submit #insert-event'(event) {
		event.preventDefault()
		
		let name = event.target.name.value

		let data = {
			name
		}

		Meteor.call('insertEvent', data, function(error, id) {
			if(error)
				return console.log(error)

			FlowRouter.go('event', {id})
		})
	}
})