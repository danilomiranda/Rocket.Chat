Package.describe({
	name: 'rocketchat:message-tasks',
	version: '0.0.1',
	summary: 'Tasks',
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
		'client/lib/Tasks.js',
		'client/actionButton.js',
		'client/tasks.js',
		'client/tabBar.js',
		'client/views/tasks.html',
		'client/views/tasks.js',
		'client/views/stylesheets/tasks.less'
	], 'client');

	api.addFiles([
		'server/settings.js',
		'server/newTask.js',
		'server/publications/tasks.js',
		'server/startup/indexes.js'
	], 'server');
});
