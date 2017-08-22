var mongoose = require('mongoose');
var api = {};

var jwt = require('jsonwebtoken');

var User = mongoose.model('User');

api.secret = 'potatos';

api.authenticate = function(req, res) {
  
  User.findOne({
    login: req.body.login
    
  }, function(err, user){
    if (err){
        throw err;
    }
    
    if (!user){
      res.status(403).json({success: false, message:'Failed to log in'});
    } else {
      if (user.password != req.body.password) {
        res.status(403).json({success: false, message:'Failed to log in'});
      } else {
        var token = jwt.sign(user, api.secret, {
          expiresIn:3600*24
          
        });
        res.status(200).json({success: true, token: token, user: {login:user.login, _id:user._id }});
      }
    }
  });
};

api.isAuthorized = function(req, res, next){
  jwt.verify(req.get('x-access-token'), api.secret,
    function(err, token){
      if(err){
        res.status(403).json({error: true, message: 'Access Denied!'})
      } else {
        req.user = token._doc;
        next();
      }
    })
}

module.exports = api;