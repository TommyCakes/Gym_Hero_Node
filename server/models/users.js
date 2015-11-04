var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    uid: String,
    displayName: String,
    picture: String,
    email: String,
    workouts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
