let examplePattern = {
	content:Match.Where(content => {
		check(content, String)
		return content.length>0 &&
			   content.length<73
	}),
	createdAt:Date
}

Examples = new Mongo.Collection('examples')

Meteor.methods({
	insertExample(data) {
		//construct example
		let example = {
			content:data.content.trim(),
			createdAt:new Date()
		}

		//validate data on server
		if(Meteor.isServer)
			check(example, examplePattern)

		//insert example
		Examples.insert(example, throwServerError)
	},

	updateExample(example, _id) {
		Examples.update({_id}, example)
	},

	removeExample(_id) {
		Examples.remove({_id})
	},

	clearExamples() {
		Examples.remove({})
	}
})

if(Meteor.isServer) {
	Meteor.publish('examples', function() {
		return Examples.find({})
	})
}