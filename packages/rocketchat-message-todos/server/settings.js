Meteor.startup(function() {
	return RocketChat.settings.add('Message_AllowTodos', true, {
		type: 'boolean',
		group: 'Message',
		'public': true
	});
});
