Package.describe({
	name: 'rocketchat:help-flextab',
	version: '0.0.1',
	summary: 'Help / Shortcuts',
	git: ''
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'underscore',
		'less',
	]);

	api.use('templating', 'client');

	api.addFiles([
		'client/tabBar.js',
		'client/views/help.html',
		'client/views/stylesheets/help.less'
	], 'client');

});
