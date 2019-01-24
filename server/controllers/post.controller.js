var postModel = require('../models/post.model');
let postController = {};

postController.getPost = function(req, res){
	postModel
	.find({},
	function(req, showPost){
		console.log("Post")
		res.status(200).send(showPost);
	})
}
postController.getPostById = function(req, res){
	// var userid = req.body.id;
	// console.log(userid);
	postModel.findOne({_id: req.params.id}, function(err, foundPost){
		console.log(req.params.id)
		res.send(err || foundPost);
	})
	//console.log(req.body);
}
postController.deletePost = function(req, res){
	postModel.deleteOne({_id: req.params.id}, function(err, foundPost){
		console.log(req.params.id)
		res.send(err || foundPost);
	})
}
postController.updatePost = function(req, res){
	var postid = req.body._id;
	console.log("updatedPost =", req.body);
	postModel.findOneAndUpdate({_id: postid}, req.body, {upsert: true,new: true}, function(err, updatedPost){
		console.log(updatedPost)
		res.send(updatedPost);
	})
	console.log(req.body);

}
postController.addPost = function(req, res){
	var post = new postModel(req.body);
	post.save( function(err, savedPost){
		console.log(err, savedPost);
		res.send(savedPost);
	})
	console.log(req.body);
}
module.exports = postController;