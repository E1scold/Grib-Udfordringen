Template.insertExample.events({
	'submit #insert-example'(event) {
		event.preventDefault()

		//encapsulate data
		let data = {
			content: 	event.target.example.value
		}

		//send data
		Meteor.call('insertExample', data, error => {
			
			//handle error
			if(error)
				return console.log(error)

			//clear inputs
			event.target.example.value =''
		})
	},

	'click #clear-examples'(event) {
		event.preventDefault()

		Meteor.call('clearExamples', error => {
			if(error)
				return console.log(error)
		})
	}
})