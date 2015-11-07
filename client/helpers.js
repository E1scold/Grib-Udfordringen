//helpers that should be available in any template goes here
Template.registerHelper('toAbsolute', relative => Meteor.absoluteUrl(relative))
