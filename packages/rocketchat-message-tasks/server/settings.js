Meteor.startup(function() {
	return RocketChat.settings.add('Message_AllowTasks', true, {
		type: 'boolean',
		group: 'Message',
		'public': true
	});
});
