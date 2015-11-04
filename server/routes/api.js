var Logs = require('../models/logs');
var Workout = require('../models/workout');
var User = require('../models/users');

module.exports = function(app){
  app.route('/api/workouts/:id')
    .options(function (req, res, next) {
          res.sendStatus(200).end();
          next();
      })
    .post(function(req, res) {

      var newWorkout = new Workout({
        date: Date.now(),
      })
      var currentWorkout = req.body;
          currentWorkout.forEach(function(val, index) {
            var movement = {
              mood: val.mood,
              name: val.name,
              reps: val.reps,
              sets: val.sets,
              weight: val.weight
            }
            newWorkout.exercises.push(movement)
        });

      var userID = req.params.id ? {user: req.params.id} : {user:{"$exists":false}};

    Logs.findOne(userID, function(err, logs, next){
      if(!logs){
        var newLogs = new Logs({
          user: req.params.id,
          workouts: [newWorkout]
        });

        newLogs.save(function(err, workout){
          if (err) {
            throw err
          }
            res.json(currentWorkout)
            next(null, workout);
          });
        }
          else {
            logs.workouts.push(newWorkout);

            res.json(newWorkout)
          }
        }
      )
      })
      .get(function(req,res){
        Logs.findOne({user: req.params.id}, function(err, logs){
          if(err) handleError(err)

          res.json(logs)
        })
  });
}
