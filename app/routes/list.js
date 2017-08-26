module.exports = function(app) {
	var api = app.api.list;

  var auth = app.api.auth;

	app.route('/api/v1/list')
		.get(auth.isAuthorized, api.listAll)
		.post(auth.isAuthorized, api.add);

	app.route('/api/v1/list/:id')
		.get(auth.isAuthorized, api.getById)
		.delete(auth.isAuthorized, api.remove)
		.put(auth.isAuthorized, api.update);
};
