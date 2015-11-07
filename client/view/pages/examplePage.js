ExampleRoutes.route('/something', { 
	name:'examplePage',
	action() {
		BlazeLayout.render('exampleLayout', {page:'examplePage'}) //basic page routing
	}
})

Template.examplePage.onCreated(function() {
	//when the template is created
})

Template.examplePage.onRendered(function() {
	//whenever the template is rendered
})

Template.examplePage.onDestroyed(function() {
	//when the template is destroyed
})

Template.examplePage.events({
	//template events here
})

Template.examplePage.helpers({
	//tempalate helpers here
})