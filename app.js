var app = require('./config/express')();
require('./config/database');

var port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', function() {
	console.log("Server up!");
});