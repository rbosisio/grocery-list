var express = require('express');
var consign = require('consign')
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

	app.use(express.static('./public'));
	app.use(bodyParser.json());

	consign({cwd: 'app'})
	    .include('models')
		.then('api')
		.then('routes')
		.into(app);

	return app;
}