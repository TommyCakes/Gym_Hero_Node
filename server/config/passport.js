var passport = require('passport');
//
// var LocalStratergy = require('passport-local')

var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
//
var User = require('../models/users');

passport.serializeUser(function(user, next) {
  next(null, user._id)
})
passport.deserializeUser(function(userId, next) {
  User.findById(userId, function(err, user) {
    next(err, user)
  })
})

var faceStrategy  = new FacebookStrategy({
        clientID: '479313878908326',
        clientSecret: '7058819b5e5702d677916b7e209d5a73',
        callbackURL: 'http://127.0.0.1:3000/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, next) {
  console.log(profile)
  User.findOne({ uid: profile.id}, function(err, user) {
    if (user) {
      next(null, user);
    }
    else {
      var newUser = new User({
        uid: profile.id,
        displayName: profile.displayName
      });

      newUser.save(function(err, user){
        if (err) {
          throw err
        }
          next(null, user)
      });
    }
  });
});
passport.use(faceStrategy);
//
var tweetStrategy = new TwitterStrategy({
        consumerKey: 'VHtkFkU5XRunOudAg1Ltzx5jb',
        consumerSecret: 'Ko27H2AdrO28UZdIpcZFEjhrPVlRNgqxnVn2zasFHtOnNUAnod',
        callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
},
function(token, tokenSecret, profile, next) {
  console.log(profile);
    User.findOne({ uid: profile.id }, function(err, user) {
      if (user) {
        next(null, user);
      }
      else {
        var newUser = new User({
          uid: profile.id,
          displayName: profile.displayName,
          picture: profile.photos[0].value.replace(/_normal/, "")
        });

        newUser.save(function(err, user) {
          if (err) {
            throw err;
          }
            next(null, user)
        });
      }
    });
});
passport.use(tweetStrategy);
