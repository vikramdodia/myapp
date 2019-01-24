var alphabetModel = require('../models/alphabet.model');
var alphabetController = {};

alphabetController.getAlphabet = function(req, res){
	alphabetModel
	.find({})
	.exec(function(req, alphabet){
		res.send({alphabets : alphabet});
	})
}
alphabetController.getAlphabetById = function(req, res){
	alphabetModel = find({_id: req.param.id}, function(err, savedAlphabet){
		res.send(err || foundAlphabet);
	})
	console.log(req.body);
}
alphabetController.deleteAlphabet = function(req, res){
	var alphabet = new alphabetModel(req.body);
	alphabetModel.remove({_id: alphabetid}, function(req, savedAlphabet){
		console.log(deleteAlphabet);
	})
	console.log(req.body);
}
alphabetController.updateAlphabet = function(req, res){
	var alphabetid = req.body._id;
	alphabetModel.findOneAndUpdate({_id: alphabetid}, req.body, {upsert: true}, function(err, savedAlphabet){
		console.log(updatedAlphabet)
		res.send(updatedAlphabet);
	})
	console.log(req.body);

}

alphabetController.addAlphabet = function(req, res){
	var alphabet = new alphabetModel(req.body);
	alphabet.save( function(err, savedAlphabet){
		console.log(err, savedAlphabet);
		res.send(savedAlphabet);
	})
	console.log(req.body);
}

module.exports = alphabetController;