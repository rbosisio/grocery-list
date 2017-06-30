module.exports = function(app) {
	var api = app.api.list;

	app.route('/api/v1/list')
		.get(api.listAll)
		.post(api.add);
	
	app.route('/api/v1/list/:id')
		.get(api.getById)
		.delete(api.remove)
		.put(api.update);
}