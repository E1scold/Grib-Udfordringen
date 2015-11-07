getLanguage = () => {
	var lang = 'en'

	if(navigator && navigator.language)
		lang = navigator.language
	
	else if(navigator && navigator.languages && navigator.languages.length>0)
		lang = navigator.languages[0]

	return lang.substring(0,2).toLowerCase()
}

if (Meteor.isClient) {
  Meteor.startup(() => {
    Session.set("showLoadingIndicator", true)
    TAPi18n.setLanguage(getLanguage())
      .done(() => Session.set("showLoadingIndicator", false))
      .fail(error => console.log(error))
  })
}