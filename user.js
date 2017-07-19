var mongoose = require('./db.js')
var Schema = mongoose.Schema


var UserSchema = new Schema({
	username: {type: String},
	userpwd: {type: String},
	userage: {typt: Number},
	logindate: {type: Date}
})

module.exports = mongoose.model('User', UserSchema)