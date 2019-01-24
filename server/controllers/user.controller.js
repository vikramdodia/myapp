var userModel = require('../models/user.model');
let userController = {};

userController.getUser = function(req, res){
	userModel
	.find({},
		function(err, showUser){
		console.log("User");
		res.status(200).send(showUser);
		})
	}
	userController.getUserById = function(req, res){
		userModel.findOne({_id: req.params.id}, function(err, foundUser){
			console.log(req.params.id);
			return res.send(foundUser);
		})
		console.log(req.body);
	}
	userController.deleteUser = function(req, res){
		userModel.deleteOne({_id: req.params.id}, function(err, foundUser){
			console.log(req.params.id);
			res.send(err || foundUser);
		})
	}
	userController.updateUser = function(req, res){
		var userid = req.body._id;
		console.log("UpdatedObject = ",req.body);
		userModel.findOneAndUpdate({_id: userid}, req.body, {upsert : true, new : true} , function(err, updatedUser){
			console.log(updatedUser)
			res.send(updatedUser);
		})
		console.log(req.body);

	}

	userController.addUser = function(req, res){
		var user = new userModel(req.body);
		user.save( function(err, savedUser){
			console.log(err, savedUser);
			res.send(savedUser);
		})
		console.log(req.body);
	}

	module.exports = userController;