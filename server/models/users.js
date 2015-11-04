var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    uid: String,
    displayName: String,
    picture: String,
    email: String,
});

var User = mongoose.model('User', userSchema);

module.exports = User;
