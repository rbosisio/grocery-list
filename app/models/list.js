var mongoose = require('mongoose');

var schema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: false
        },
        user_id: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: false,
            default: []
        }
    });
    
mongoose.model('List', schema);