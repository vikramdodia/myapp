var keyboardModel = require('../models/keyboard.model');
var alphabetModel = require('../models/alphabet.model')
var keyboardController = {};

keyboardController.getKeyboard = function(req, res){
	keyboardModel
	.find({})
	.populate('letter')
	.exec(function(req, res){
		res.send({keyboards : keyboards});
	})
}
keyboardController.getKeyboardById = function(req, res){
	
	
	keyboardModel.find({_id: req.params.id}, function(err, foundKeyboard){
		console.log(req.params.id);
		res.send(err || foundKeyboard);
	})
	console.log(req.body);
}
keyboardController.deleteKeyboard = function(req, res){
	var keyboardid = req.body.keyboardid;
	console.log(req.body.keyboardid);
	keyboardModel.findOneAndDelete({_id: keyboardid}, function(req, deleteKeyboard){
		console.log(deleteKeyboard);
	})
	console.log(req.body);
}
keyboardController.updateKeyboard = function(req, res){
	var keyboardid = req.body.keyboardid;
	console.log(req.body.keyboardid);
	keyboardModel.findOneAndUpdate({_id: keyboardid}, req.body, {upsert: true} , function(err, updatedKeyboard){
		console.log(updatedKeyboard)
		res.send(updatedKeyboard);
	})
	console.log(req.body);

}

keyboardController.addKeyboard = function(req, res){
	var keyboard = new keyboardModel(req.body);
	keyboard.save( function(err, savedKeyboard){
		console.log(err, savedKeyboard);
		res.send(savedKeyboard);
	})
	console.log(req.body);
}

module.exports = keyboardController;



