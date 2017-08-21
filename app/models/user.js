var mongoose = require('mongoose');

var schema = mongoose.Schema(
    {
        login: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        admin: {
            type: Boolean,
            required: false,
            default: [false]
        }
    });
    
mongoose.model('User', schema);