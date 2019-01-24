var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alphabetSchema = new Schema({
	alphabet_name: String,
	date: {type:Date, default: Date.now}	
});
module.exports = mongoose.model('alphabet', alphabetSchema);