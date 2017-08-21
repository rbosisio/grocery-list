var mongoose = require('mongoose');
var api = {};

var User = mongoose.model('User')

api.listAll = function(req, res) {
    User.find(function(err, users){
        if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.json(users);
    } )
};

api.getById = function(req, res) {
	var user = User.findOne({_id: req.params.id}, function(err, user){
	    if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.json(user);
	});
	
};

api.add = function(req, res) {
    var user = new User(req.body);
    user.save(function(err, list){
        if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.json(user);
    });
    
};

api.remove = function(req, res) {
	User.remove({_id: req.params.id}, function(err){
	    if (err){
	        console.log(err);
            res.status(500).json(err);
	    }
	    res.sendStatus(204);
	});
};

api.update = function(req, res) {
	User.findOneAndUpdate({_id:req.params.id}, req.body, {new: true}, function(err, user){
	    if (err){
            console.log(err);
            res.status(500).json(err);
        }
        res.json(user);
	});
};

module.exports = api;