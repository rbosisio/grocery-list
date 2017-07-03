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
        items: {
            type: Array,
            required: false,
            default: []
        }
    });
    
mongoose.model('List', schema);