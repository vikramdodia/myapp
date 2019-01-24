var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keyboardSchema = new Schema({
	alphabet_name: String,
	letter: [{type : Schema.Types.ObjectId, ref: 'alphabet'}]
});
module.exports = mongoose.model('keyboard', keyboardSchema);