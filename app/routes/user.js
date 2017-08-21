module.exports = function(app) {
	var api = app.api.user;

	app.route('/api/v1/user')
		.get(api.listAll)
		.post(api.add);
	
	app.route('/api/v1/user/:id')
		.get(api.getById)
		.delete(api.remove)
		.put(api.update);
}