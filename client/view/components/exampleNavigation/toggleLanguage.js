Template.toggleLanguage.onRendered(function() {
	this.$('.dropdown').dropdown({
    	on: 		'hover',
    	action: 	'select',
    	transition: 'drop'
  	}).dropdown(
  		'set selected', TAPi18n.getLanguage()
  	)
})

Template.toggleLanguage.events({
	'click .toggle-lang'(event) {
		event.preventDefault()
		TAPi18n.setLanguage(this.tag)
	}
})

Template.toggleLanguage.helpers({
	languages() {
		return $.map(TAPi18n.getLanguages(), lang => {
			lang.tag = lang.en.substring(0,2).toLowerCase()
			return lang
		})
	}
})