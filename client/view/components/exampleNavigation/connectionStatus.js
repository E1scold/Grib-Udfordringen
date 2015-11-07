var statusIcons = {
	connected: 	'green checkmark',
	connecting: 'yellow notched circle loading',
	waiting: 	'yellow wait',
	failed: 	'red warning',
	offline: 	'red remove'
}

Template.connectionStatus.onRendered(function() {
	this.$('.dropdown').dropdown({
    	on: 		'hover',
    	action: 	'nothing',
    	transition: 'drop'
  	})
})

Template.connectionStatus.events({
	'click #disconnect'(event) {
		event.preventDefault()
		Meteor.disconnect()
	},

	'click #reconnect'(event) {
		event.preventDefault()
		Meteor.reconnect()
	}
})

Template.connectionStatus.helpers({
	connection() {
		let connection = Meteor.status()
		_.extend(connection, {
			icon:statusIcons[connection.status]
		})
		return connection
	}
})