Meteor.startup(function() {
	return RocketChat.TabBar.addButton({
		groups: ['channel', 'group', 'direct'],
		id: 'todo',
		i18nTitle: 'Todos',
		icon: 'icon-check',
		template: 'todos',
		order: 3
	});
});
