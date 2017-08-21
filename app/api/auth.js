var mongoose = require('mongoose');
var api = {};

var jwt = require('jsonwebtoken');

var User = mongoose.model('User');

api.authenticate = function(req, res) {
  
  User.findOne({
    login: req.body.login
    
  }, function(err, user){
    if (err){
        throw err;
    }
    
    if (!user){
      res.status(403).json({success: false,message:'Failed to log in'});
    } else {
      if (user.password != req.body.password) {
        res.status(403).json({success: false,message:'Failed to log in'});
      } else {
        var token = jwt.sign(user, 'node-auth', {
          expiresIn:3600*24
          
        });
        res.status(200).json({success: true, token: token });
      }
    }
  });
};

module.exports = api;