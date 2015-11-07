Events = new Mongo.Collection('events')

Meteor.methods({
	insertEvent(data) {

		let userId = Meteor.userId()
		if(!userId && Meteor.isServer)
			throw Meteor.Error('unauthorized')
		
		let event = {
			name:data.name,
			createdAt:new Date(),
			createdBy:userId
		}

		let eventId = Events.insert(event)

		return eventId
	}
})

if(Meteor.isServer) {
	Meteor.publish('event', function(id) {
		let events = Events.find({_id:id})

		if(events.count()!==1)
			throw Meteor.Error('invalid event id')

		return events
	})

	Meteor.publish('events', function() {
		return Events.find({}, {fields:{_id:1, name:1}})
	})
}