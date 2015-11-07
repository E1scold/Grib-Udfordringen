FlowRouter.route('/event/:id', {
	name:'event',
	action() {
		BlazeLayout.render('default', {page:'event'})
	}
})

Template.event.onCreated(function() {
	this.id = FlowRouter.getParam('id')

	this.subscribe('event', this.id)
})

Template.event.helpers({
	event() {
		let template = Template.instance()
		return Events.findOne({_id:template.id})
	}
})