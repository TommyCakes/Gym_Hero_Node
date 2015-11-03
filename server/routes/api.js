var Workout = require('../models/workout');
var Movement = require('../models/movement');
var User = require('../models/users');
var express = require('express');
var router = express.Router();

router.post('/workouts/:id', function(req, res) {

  User.findOne({uid: req.params.id},function(err, user){
    if (user) {
      var newWorkout = new Workout({
                        date: Date.now(),
                        exercises: []
      })
      var currentWorkout = req.body;
          currentWorkout.forEach(function(val, index) {
            var movement = new Movement({
                          mood: val.mood,
                          name: val.name,
                          reps: val.reps,
                          sets: val.sets,
                          weight: val.weight,
            })
            newWorkout.exercises.push(movement)
          })
      user.update({$push: {workouts: newWorkout }})
    }
  })
});

module.exports = router;
