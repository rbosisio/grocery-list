var mongoose = require('mongoose');

var URL_DB = process.env.URL_DB;

console.log(URL_DB);

mongoose.connect(URL_DB);

mongoose.connection.on('connected', function() {
    console.log('Database connected!');
});

mongoose.connection.on('error', function(error) {
    console.log('Database connection error: ' + error);
});
