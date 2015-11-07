Template.authentication.events({
	'click #sign-up'(event, template) {
		event.preventDefault()

		let username = template.$('#username')[0].value
		let password = template.$('#password')[0].value

		user = {
			username,
			password
		}

		Accounts.createUser(user, function(error) {
			if(error)
				return console.log(error)


		})
	},

	'click #sign-in'(event, template) {
		event.preventDefault()
		
		let username = template.$('#username')[0].value
		let password = template.$('#password')[0].value

		Meteor.loginWithPassword(username, password, function(error) {
			if(error)
				return console.log(error)
		})
	},

	'click #sign-in-facebook'(event, template) {
		event.preventDefault()
		
		Meteor.loginWithFacebook(function(error) {
			if(error)
				return console.log(error)
		})
	},

	'click #sign-out'(event) {
		event.preventDefault()

		Meteor.logout()
	},

	'click #go-user'(event) {
		event.preventDefault()

		let username = Meteor.user().username.toLowerCase()

		FlowRouter.go('user', {username})
	}
})

Template.authentication.helpers({
	//tempalate helpers here
})