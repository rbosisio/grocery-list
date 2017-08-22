var mongoose = require('mongoose');
var api = {};

var List = mongoose.model('List')

api.listAll = function(req, res) {
  console.log(req.user);
    List.find({ user_id: req.user._id} ,function(err, lists){
        if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.json(lists);
    } )
};

api.getById = function(req, res) {
	var list = List.findOne({_id: req.params.id, user_id: req.user._id}, function(err, list){
	    if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.json(list);
	});
	
};

api.add = function(req, res) {
    var list = new List(req.body);
    list.save(function(err, list){
        if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.json(list);
    });
    
};

api.remove = function(req, res) {
	List.remove({_id: req.params.id, user_id: req.user._id}, function(err){
	    if (err){
	        console.log(err);
            res.status(500).json(err);
	    }
	    res.sendStatus(204);
	});
};

api.update = function(req, res) {
	List.findOneAndUpdate({_id:req.params.id, user_id: req.user._id}, req.body, {new: true}, function(err, list){
	    if (err){
            console.log(err);
            res.status(500).json(err);
        }
        res.json(list);
	});
	
	
};

module.exports = api;