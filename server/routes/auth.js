var express = require('express');
var router = express.Router();
var passport = require('passport');



router.get('/', function(req, res) {
  res.render('login', {title: 'Login'})
})
router.get('/twitter',
  passport.authenticate('twitter',
  {
    scope: 'email'
  })
)
router.get('/twitter/callback',
  passport.authenticate('twitter',
  {
    failureRedirect: '/auth'
  }), function(req, res) {
      res.redirect('/')
  })

module.exports = router;
