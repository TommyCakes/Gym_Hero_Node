var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movementSchema = new Schema ({
    mood: String,
    name: String,
    reps: String,
    sets: String,
    weight: String
  })

var Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
