module.exports = function(app) {
	var api = app.api.user;

  var auth = app.api.auth;

	app.route('/api/v1/user')
		.get(auth.isAuthorized, auth.isAdmin, api.listAll)
		.post(auth.isAuthorized, auth.isAdmin, api.add);
	
	app.route('/api/v1/user/:id')
		.get(auth.isAuthorized, api.getById)
		.delete(auth.isAuthorized, auth.isAdmin, api.remove)
		.put(auth.isAuthorized, auth.isAdmin, api.update);
}