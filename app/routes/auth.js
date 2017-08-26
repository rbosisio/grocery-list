module.exports = function(app) {
	var api = app.api.auth;

	app.route('/api/v1/auth')
		.post(api.authenticate);

};
