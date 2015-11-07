//routes that don't render pages

FlowRouter.route('/', {
	name:'exampleRoot',
	triggersEnter:[(context, redirect) => {
		redirect('examplePage')	//redirect from root
	}]
})

ExampleRoutes.route('/clear', {
	name:'clearExamples',
	action() {
		Meteor.call('clearExamples', error => { //clear all examples on the examples page and go to it
			if(error)
				return console.log(error)
		})
		FlowRouter.go('examplePage')
	}
})