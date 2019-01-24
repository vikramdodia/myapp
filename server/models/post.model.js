var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	lastname: String,
	date: {type:Date, default: Date.now}	
});
module.exports = mongoose.model('post', postSchema);