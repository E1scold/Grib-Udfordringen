Template.listExamples.onCreated(function() {
	this.subscribe('examples')
})

Template.listExamples.helpers({
	examples() {
		return Examples.find({}, Modifiers.sortByCreatedAt)
	}
})