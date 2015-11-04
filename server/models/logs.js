var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logsSchema = new Schema({
    user: String,
    workouts: []
})


var Logs = mongoose.model('Logs', logsSchema);
module.exports = Logs;
