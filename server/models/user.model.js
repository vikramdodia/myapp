var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	phone: String,
	email: String,
	date: {type: Date, default: Date.now},
	add: [{type : Schema.Types.ObjectId, ref: 'post'}]
});
module.exports = mongoose.model('user', userSchema);