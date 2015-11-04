var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutsSchema = new Schema({
    date: Date,
    exercises: [{
      reps: String,
      weight: String,
      sets: String,
      mood: String,
      name: String
    }]
})


var Workouts = mongoose.model('Workouts', workoutsSchema);
module.exports = Workouts;
