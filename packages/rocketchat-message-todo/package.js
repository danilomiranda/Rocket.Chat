Package.describe({
	name: 'rocketchat:todos',
	version: '0.0.1',
	summary: 'Todos',
	git: ''
});

Package.onUse(function(api) {
	api.use([
		'mongo',
		'ecmascript',
		'underscore',
		'less',
		'rocketchat:lib'
	]);

	api.use('templating', 'client');

	api.addFiles([
		'client/lib/Todos.js',
		'client/actionButton.js',
		'client/todo.js',
		'client/tabBar.js',
		'client/views/starredMessages.html',
		'client/views/starredMessages.js',
		'client/views/stylesheets/messagestar.less'
	], 'client');

	api.addFiles([
		'server/settings.js',
		'server/starMessage.js',
		'server/publications/starredMessages.js',
		'server/startup/indexes.js'
	], 'server');
});
