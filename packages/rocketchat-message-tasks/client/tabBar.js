Meteor.startup(function() {
	return RocketChat.TabBar.addButton({
		groups: ['channel', 'group', 'direct'],
		id: 'task',
		i18nTitle: 'Tasks',
		icon: 'icon-check',
		template: 'tasks',
		order: 3
	});
});
