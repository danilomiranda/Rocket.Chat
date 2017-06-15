Meteor.startup(function() {
	return RocketChat.TabBar.addButton({
		groups: ['channel', 'group', 'direct'],
		id: 'help-shortcuts',
		i18nTitle: 'Help_Shortcuts',
		icon: 'icon-help',
		template: 'help',
		order: 9
	});
});
