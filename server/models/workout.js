var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
        date: Date,
        exercises: [{ type: Schema.Types.ObjectId,
                      ref: 'Movement'
                    }]

})


var Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
