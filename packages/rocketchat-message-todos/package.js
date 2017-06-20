Package.describe({
	name: 'rocketchat:message-todos',
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
		'client/todos.js',
		'client/tabBar.js',
		'client/views/todos.html',
		'client/views/todos.js',
		'client/views/stylesheets/todos.less'
	], 'client');

	api.addFiles([
		'server/settings.js',
		'server/starMessage.js',
		'server/publications/todos.js',
		'server/startup/indexes.js'
	], 'server');
});
