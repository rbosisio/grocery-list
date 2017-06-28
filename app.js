var app = require('./config/express')();

app.listen(8000, '0.0.0.0', function() {
	console.log("Server up!")
});